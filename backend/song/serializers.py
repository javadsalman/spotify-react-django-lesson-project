from rest_framework import serializers
from .models import (
    Playlist, Song, Genre
)

class PlayListSerializer(serializers.ModelSerializer):
    from user.serializers import CustomerInfoSerializer
    author = CustomerInfoSerializer()
    class Meta:
        model = Playlist
        fields = '__all__'
        
        
class SongSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Song
        exclude = ['lyrics']
        
class SongDetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Song
        fields = '__all__'
        