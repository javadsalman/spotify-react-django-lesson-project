from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Playlist, Song, Genre
from .serializers import (
    PlayListSerializer, SongSerializer, SongDetailSerializer
)
from .serializers import PlayListDetailSerializer

# Create your views here.

class PlaylistListAV(ListCreateAPIView):
    queryset = Playlist.objects.filter(hide=False)
    serializer_class = PlayListSerializer
class PlaylistDetailAV(RetrieveUpdateDestroyAPIView):
    queryset = Playlist.objects.filter(hide=False)
    serializer_class = PlayListDetailSerializer
    
    def get_serializer_context(self):
        return {'request': self.request}
    
    
class SongListAV(ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
class SongDetailAV(RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongDetailSerializer