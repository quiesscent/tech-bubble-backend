from django.db import models

# Create your models here.

class Announcement(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=100000000000)
    author = models.CharField(max_length=100)
    published_date = models.DateField()

    def __str__(self):
        return self.title
