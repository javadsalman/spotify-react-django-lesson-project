# Generated by Django 4.1.5 on 2023-01-11 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('song', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='playlists',
            field=models.ManyToManyField(blank=True, to='song.playlist'),
        ),
    ]
