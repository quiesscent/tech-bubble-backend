from django.db import models

# Create your models here.

class Announcement(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=100000000000)
    author = models.CharField(max_length=100)
    published_date = models.DateField()

    def __str__(self):
        return self.title


class Team(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='team/', default='team.png')
    role = models.CharField(max_length=200)
    x_link= models.URLField(max_length=200)
    linkedln_link = models.URLField(max_length=200)
    github_link = models.URLField(max_length=200)


    def __str__(self):
        return f'{self.role} - {self.name}'


class Expertise(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(default='')
    content = models.TextField(default='')
    image = models.ImageField(upload_to='expertise/', default='expertise.png')


    def __str__(self):
        return f'{self.title} Content'


class Contact(models.Model):
    name = models.CharField(max_length=100, default='')
    email = models.EmailField()
    message = models.TextField(default='')


    def __str__(self):
        return f'Message from {self.name}'

