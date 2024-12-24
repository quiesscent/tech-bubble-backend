from rest_framework import generics, permissions
from .models import Announcement, Team, Expertise, Contact
from .serializers import AnnouncementSerializer, ContactSerializer, TeamSerializer, ExpertiseSerializer
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from auths.permissions import IsOwnerOrAdmin

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
