from rest_framework import serializers
from .models import (
    Playlist, Song, Genre
)
from user.models import Customer

class CustomerSummarySerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    username = serializers.CharField(source='user.username')
    class Meta:
        model = Customer
        fields = ['id', 'first_name', 'last_name', 'username', 'image']

class PlayListSerializer(serializers.ModelSerializer):
    author = CustomerSummarySerializer()
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
        
     
     
class SongSerializerForPlaylistDetail(serializers.ModelSerializer):
    artists = serializers.StringRelatedField(many=True)
    genres = serializers.StringRelatedField(many=True)
    liked = serializers.SerializerMethodField()
    class Meta:
        model = Song
        exclude = ['playlists', 'lyrics']
        
    def get_liked(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            return user.customer.liked_songs.filter(id=obj.id).exists()
        return False
        
class PlayListDetailSerializer(serializers.ModelSerializer):
    author = CustomerSummarySerializer()
    songs = SongSerializerForPlaylistDetail(many=True)
    liked = serializers.SerializerMethodField()
    
    def get_liked(self, obj):
        return self.context['request'].user.customer.liked_playlists.filter(id=obj.id).exists()
    
    class Meta:
        model = Playlist
        fields = '__all__'