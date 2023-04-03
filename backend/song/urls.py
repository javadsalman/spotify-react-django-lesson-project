from django.urls import path
from . import views

urlpatterns = [
    path('playlists/', views.PlaylistListAV.as_view(), name='playlist-list'),
    path('playlists/<int:pk>/', views.PlaylistDetailAV.as_view(), name='playlist-detail'),
    path('songs/', views.SongListAV.as_view(), name='song-list'),
    path('songs/<int:pk>/', views.SongDetailAV.as_view(), name='song-detail'),
    path('genres/', views.GenreListAV.as_view(), name='genre-list'),
    path('genres/<int:pk>/', views.GenreDetailAV.as_view(), name='genre-detail'),
]
