# Generated by Django 2.1.1 on 2019-07-03 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('signup', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='signup',
            name='visited',
            field=models.BooleanField(default=False),
        ),
    ]
