from django.db import models
from auths.models import *
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
    experience = models.IntegerField(default=0)
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

class Category(models.Model):
    name = models.CharField(max_length=1000, default='')


    class Meta:
        verbose_name_plural= 'Categories'

    def __str__(self):

        return f'{self.name}'

class Contact(models.Model):
    name = models.CharField(max_length=100, default='')
    email = models.EmailField()
    message = models.TextField(default='')


    def __str__(self):
        return f'Message from {self.name}'


class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    # author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='blogs/', default='blog.png')
    # video = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(blank=True, null=True)
    category = models.CharField(max_length=255, default='General')

    def __str__(self):
        return f'{self.title}'

class Comment(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name="comments")
    user = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
