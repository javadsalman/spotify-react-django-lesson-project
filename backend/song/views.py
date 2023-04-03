from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.filters import SearchFilter
from .models import Playlist, Song, Genre
from .serializers import (
    PlayListSerializer, SongSerializer, SongDetailSerializer, GenreSummarySerializer, GenreSerializer
)
from .serializers import PlayListDetailSerializer

# Create your views here.

class PlaylistListAV(ListCreateAPIView):
    queryset = Playlist.objects.filter(hide=False)
    serializer_class = PlayListSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title']
    
class PlaylistDetailAV(RetrieveUpdateDestroyAPIView):
    queryset = Playlist.objects.filter(hide=False)
    serializer_class = PlayListDetailSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title']
    
    def get_serializer_context(self):
        return {'request': self.request}
    
    
class SongListAV(ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    filter_backends = [SearchFilter]
    search_fields = ['title']
class SongDetailAV(RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongDetailSerializer
    filter_backends =  [SearchFilter]
    search_fields = ['title']
    
# generate genre list and detail class view
class GenreListAV(ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSummarySerializer
    
class GenreDetailAV(RetrieveUpdateDestroyAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    