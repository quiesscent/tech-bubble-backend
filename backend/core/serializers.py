from rest_framework import serializers
from .models import *

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team 
        fields = '__all__'


class ExpertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expertise
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    comment_count = serializers.SerializerMethodField()
    class Meta:
        model = Blog
        fields = '__all__'

    def get_comment_count(self, obj):
        return Comment.objects.filter(blog=obj).count()


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
