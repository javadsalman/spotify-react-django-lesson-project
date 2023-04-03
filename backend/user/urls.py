from django.urls import path
from . import views

urlpatterns = [
    path('liked-playlists/', views.LikedPlaylistListAV.as_view(), name='liked-playlist-list'),
    path('like-playlist/<int:pk>/', views.like_playlist, name='like-playlist'),
    path('unlike-playlist/<int:pk>/', views.unlike_playlist, name='unlike-playlist'),
    path('liked-songs/', views.LikedSongListAV.as_view(), name='liked-song-list'),
    path('like-song/<int:pk>/', views.like_song, name='like-song'),
    path('unlike-song/<int:pk>/', views.unlike_song, name='unlike-song'),
    path('artists/', views.ArtistListAV.as_view(), name='artist-list'),
    path('artists/<int:pk>/', views.ArtistDetailAV.as_view(), name='artist-detail'),
    path('following-artists/', views.FollowingArtistListAV.as_view(), name='following-artist-list'),
    path('follow-artist/<int:pk>/', views.follow_artist, name='follow-artist'),
    path('unfollow-artist/<int:pk>/', views.unfollow_artist, name='unfollow-artist'),
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('customer-profile/', views.CustomerProfileDetailAV.as_view(), name='customer-detail'),
    path('customer-image-upload/', views.CustomerProfileUploadAV.as_view(), name='customer-image-upload'),
]
