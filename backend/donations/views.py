from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import SponsorshipOrDonation
from .serializers import SponsorshipOrDonationSerializer

# Create your views here.
class SponsorshipOrDonationView(APIView):
    def post(self, request):
        serializer = SponsorshipOrDonationSerializer(data=request.data)
        if serializer.is_valid():
            donation = serializer.save()
            return Response({
                'message': 'Thank you for your support!',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        donations = SponsorshipOrDonation.objects.all()
        serializer = SponsorshipOrDonationSerializer(donations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)