# Generated by Django 5.0.2 on 2024-02-16 09:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('watchlist', '0003_watchlist_aime_watchlist_en_cours_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='watchlist',
            old_name='film',
            new_name='titre',
        ),
    ]