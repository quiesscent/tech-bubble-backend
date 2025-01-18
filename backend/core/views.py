from rest_framework import generics, permissions
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from auths.permissions import IsOwnerOrAdmin
from drf_yasg import openapi


# Create your views here.
class AnnouncementCreate(generics.CreateAPIView):
    parser_classes = [MultiPartParser, FormParser]
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdmin]

class TeamCreate(generics.CreateAPIView):
    parser_classes = [MultiPartParser, FormParser]
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdmin]

class ExpertiseCreate(generics.CreateAPIView):
    parser_classes = [MultiPartParser, FormParser]
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdmin]

class MessageCreate(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.IsAuthenticated]

class  AnnouncementList(generics.ListAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer

    def list(self, request, *args, **kwargs):
        # Get the standard response
        response = super().list(request, *args, **kwargs)

        # Return only the 'results' part with a 200 OK status
        return Response(response.data['results'], status=status.HTTP_200_OK)

class  TeamList(generics.ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)

        return Response(response.data['results'], status=status.HTTP_200_OK)

class  ExpertiseList(generics.ListAPIView):
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)

        return Response(response.data['results'], status=status.HTTP_200_OK)

class  MessageList(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrAdmin]


    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)

        return Response(response.data['results'], status=status.HTTP_200_OK)

class AnnouncementDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer

class ExpertiseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Expertise.objects.all()
    serializer_class = ExpertiseSerializer


class BlogList(APIView):
    @swagger_auto_schema(
        operation_description="Get a list of blogs",
        responses={200: BlogSerializer(many=True)},
    )
    def get(self, request):
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        request_body=BlogSerializer,
        responses={201: BlogSerializer},
    )
    def post(self, request):
        serializer = BlogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlogDetail(APIView):
    @swagger_auto_schema(
        responses={200: BlogSerializer},
    )
    def get(self, request, pk):
        try:
            blog = Blog.objects.get(pk=pk)
            serializer = BlogSerializer(blog)
            return Response(serializer.data)
        except Blog.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class CommentList(APIView):
    @swagger_auto_schema(
        operation_description="Get a list of comments",
        responses={200: CommentSerializer(many=True)},
    )
    def get(self, request):
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        request_body=CommentSerializer,
        responses={201: CommentSerializer},
    )
    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BlogLikeView(APIView):
    def post(self, request, blog_id):
        try:
            blog = Blog.objects.get(id=blog_id)
            blog.likes += 1
            blog.save()
            return Response({"message": "Blog liked successfully", "likes": blog.likes}, status=status.HTTP_200_OK)
        except Blog.DoesNotExist:
            return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)

