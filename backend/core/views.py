from rest_framework import generics
from .models import Announcement
from .serializers import AnnouncementSerializer

# Create your views here.


class AnnouncementListCreate(generics.ListCreateAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer

class AnnouncementDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer
