from rest_framework import serializers
from .models import SponsorshipOrDonation

class SponsorshipOrDonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = SponsorshipOrDonation
        fields = ['type', 'first_name', 'last_name', 'email', 'notes', 'amount', 'terms_accepted']
        
    def validate_terms_accepted(self, value):
        if not value:
            raise serializers.ValidationError("You must accept the terms and conditions.")
        return value