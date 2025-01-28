from django.contrib import admin
from .models import SponsorshipOrDonation

# Register your models here.
@admin.register(SponsorshipOrDonation)
class SponsorshipOrDonationAdmin(admin.ModelAdmin):
    list_display = ('type', 'first_name', 'last_name', 'amount', 'created_at')
    search_fields = ('first_name', 'last_name', 'email')
    list_filter = ('type', 'created_at')