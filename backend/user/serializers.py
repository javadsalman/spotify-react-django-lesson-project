from rest_framework import serializers
from django.contrib.auth.models import User
from .models import GENDER_CHOICES, Customer, Artist
from rest_framework.authtoken.models import Token
from song.models import Song, Playlist
from song.serializers import SongSerializerForPlaylistDetail


class PlaylistSerializerSummary(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = '__all__'


class RegisterSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    user_id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    password = serializers.CharField(source='user.password', write_only=True)
    birth_date = serializers.DateField(input_formats=['%Y-%m-%d'])
    gender = serializers.ChoiceField(choices=GENDER_CHOICES)
    token = serializers.SerializerMethodField(read_only=True)
    
    def create(self, validated_data):
        user_info: dict[str, str] = validated_data.pop('user')
        user = User.objects.create_user(**user_info)
        customer = Customer.objects.create(user = user, **validated_data)
        return customer
    
    def get_token(self, customer: Customer):
        token, created = Token.objects.get_or_create(user=customer.user)
        return token.key
    
    

class CustomerInfoSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    birth_date = serializers.DateField(input_formats=['%Y.%m.%d'])
    gender = serializers.ChoiceField(choices=GENDER_CHOICES)
    token = serializers.SerializerMethodField()
    class Meta:
        model = Customer
        fields = [
            'id', 
            'first_name', 
            'last_name', 
            'username', 
            'email', 
            'birth_date', 
            'gender', 
            'token',
            'user_id',
        ]
        read_only_fileds = ['id', 'user_id']
        
    def get_token(self, customer):
        token, created = Token.objects.get_or_create(user=customer.user)
        return token.key
    

    
class ArtistSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'image', 'cover', 'verified']
        

class ArtistDetailSerializer(serializers.ModelSerializer):
    songs = SongSerializerForPlaylistDetail(many=True)
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    is_following = serializers.SerializerMethodField()
    class Meta:
        model = Artist
        fields = ['id', 'first_name', 'last_name', 'image', 'cover', 'verified', 'songs', 'is_following']
        
    def get_is_following(self, artist):
        user = self.context['request'].user
        return user.is_authenticated and user.customer.followed_artists.contains(artist)


class CustomerProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    image = serializers.ImageField()
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    birth_date = serializers.DateField(input_formats=['%Y.%m.%d'])
    gender = serializers.ChoiceField(choices=GENDER_CHOICES)
    playlists = PlaylistSerializerSummary(many=True)
    followed_artists = ArtistSerializer(many=True)
    class Meta:
        model = Customer
        fields = [
            'first_name',
            'last_name',
            'email',
            'username',
            'birth_date',
            'gender',
            'playlists',
            'followed_artists',
            'image',
            'liked_songs',
            'liked_playlists',
            'followed_artists',
            'user_id'
        ]
        
        read_only_fields = ['user_id']
        
            
