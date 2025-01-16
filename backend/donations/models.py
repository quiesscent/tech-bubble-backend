from django.db import models

# Create your models here.

class SponsorshipOrDonation(models.Model):
    DONATION_TYPE_CHOICES = [
        ('individual', 'Individual'),
        ('team', 'Team'),
        ('company', 'Company'),
        ('anonymous', 'Anonymous'),
    ]
    type = models.CharField(max_length=100, choices=DONATION_TYPE_CHOICES, default='individual', verbose_name="Donation Type")
    first_name = models.CharField(max_length=100, null=False, blank=False)
    last_name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(null=False, blank=False)
    notes = models.TextField(null=True, blank=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    terms_accepted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        if self.type == 'anonymous':
            return f"Anonymous donation of {self.amount} at {self.created_at}"
        return f"{self.first_name} {self.last_name} - {self.type.capitalize()} donation"
    
    class Meta:
        verbose_name = "Sponsorship or Donation"
        