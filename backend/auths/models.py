from django.contrib.auth.models import AbstractUser 
from django.db import models

class CustomUser (AbstractUser ):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True) 
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username',]

    class Meta:
        verbose_name_plural ='Users'

    def __str__(self):
        return self.email

class PasswordResetRequest(models.Model):
    email = models.EmailField()
    token = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
