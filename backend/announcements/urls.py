from django.urls import path
from .views import *

urlpatterns = [
    path('all', AnnouncementListCreate.as_view(), name='create-announcement'),
    path('single/<int:pk>', AnnouncementDetail.as_view(), name='announcement-detail'),
]
