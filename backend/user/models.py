from django.db import models

# Create your models here.

class Customer(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='customer/images/')
    liked_songs = models.ManyToManyField('song.Song', blank=True, related_name='liked_customers')
    liked_playlists = models.ManyToManyField('song.Playlist', blank=True, related_name='liked_customers')
    followed_artists = models.ManyToManyField('Artist', blank=True, related_name='followers')
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.user.username

class Artist(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='artist/images')
    cover = models.ImageField(upload_to='artist/covers')
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)
    verified = models.BooleanField(default=False)
    
    def __str__(self):
        return self.user.username