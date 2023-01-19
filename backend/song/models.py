from django.db import models
from colorfield.fields import ColorField

# Create your models here.

class Genre(models.Model):
    title = models.CharField(max_length=20)
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.title

class Playlist(models.Model):
    title = models.TextField()
    author = models.ForeignKey('user.Customer', on_delete=models.CASCADE, related_name='playlists')
    image = models.ImageField(upload_to='playlists/images/')
    color = ColorField(null=True, blank=True)
    featured = models.BooleanField(default=False)
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)
    hide = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title

class Song(models.Model):
    title = models.TextField()
    image = models.ImageField(upload_to='songs/images/')
    audio = models.FileField(upload_to='songs/audios/')
    artists = models.ManyToManyField('user.Artist', related_name='songs')
    duration = models.IntegerField()
    lyrics = models.TextField(null=True, blank=True)
    genres = models.ManyToManyField('Genre', related_name='songs')
    playlists = models.ManyToManyField('Playlist', blank=True, related_name='songs')
    listen_count = models.BigIntegerField(default=0)
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.title