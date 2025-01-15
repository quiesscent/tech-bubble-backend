from django.urls import path
from .views import SponsorshipOrDonationView

urlpatterns = [
    path('sponsorship-or-donation/', SponsorshipOrDonationView.as_view(), name='sponsorship-or-donation'),
]
