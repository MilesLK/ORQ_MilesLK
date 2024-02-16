# Generated by Django 5.0.2 on 2024-02-15 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('watchlist', '0002_watchlist_mon_avis'),
    ]

    operations = [
        migrations.AddField(
            model_name='watchlist',
            name='aime',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='watchlist',
            name='en_cours',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='watchlist',
            name='a_regarder_plus_tard',
            field=models.BooleanField(default=True),
        ),
    ]