from rest_framework import generics, permissions
from rest_framework.response import Response
from django.utils.crypto import get_random_string
from django.core.mail import send_mail
from django.conf import settings
from .models import PasswordResetRequest
from .serializers import *
from django.contrib.auth import get_user_model

User  = get_user_model()

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer

class UserProfileUpdate(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = CustomUserUpdateSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request):
        user = request.user
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        old_password = serializer.validated_data['old_password']
        new_password = serializer.validated_data['new_password']

        if not user.check_password(old_password):
            return Response({'error': 'Old password is incorrect'}, status=400)

        user.set_password(new_password)
        user.save()
        return Response({'success': 'Password changed successfully'}, status=200)

class RequestPasswordResetView(generics.GenericAPIView):
    serializer_class = ResetPasswordRequestSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']
        user = User.objects.filter(email=email).first()

        if user:
            token = get_random_string(length=32)
            PasswordResetRequest.objects.create(email=email, token=token)
            reset_link = f"{settings.FRONTEND_URL}/reset-password/?token={token}"
            send_mail(
                'Password Reset Request',
                f'Click the link to reset your password: {reset_link}',
                settings.DEFAULT_FROM_EMAIL,
                [email],
            )
            return Response({'success': 'Password reset link sent'}, status=200)
        return Response({'error': 'User  not found'}, status=404)

class ResetPasswordView(generics.GenericAPIView):
    serializer_class = ResetPasswordSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data['token']
        new_password = serializer.validated_data['new_password']

        reset_request = PasswordResetRequest.objects.filter(token=token).first()
        if reset_request:
            user = User.objects.filter(email=reset_request.email).first()
            if user:
                user.set_password(new_password)
                user.save()
                reset_request.delete()  # Remove the reset request
                return Response({'success': 'Password reset successfully'}, status=200)
        return Response({'error': 'Invalid token'}, status=400)
