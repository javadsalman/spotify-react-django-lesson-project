from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Playlist, Song, Genre
from .serializers import (
    PlayListSerializer, SongSerializer, SongDetailSerializer
)

# Create your views here.

class PlaylistListAV(ListCreateAPIView):
    queryset = Playlist.objects.filter(hide=False)
    serializer_class = PlayListSerializer
class PlaylistDetailAV(RetrieveUpdateDestroyAPIView):
    queryset = Playlist.objects.filter(hide=False)
    serializer_class = PlayListSerializer
    
    
class SongListAV(ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
class SongDetailAV(RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongDetailSerializer