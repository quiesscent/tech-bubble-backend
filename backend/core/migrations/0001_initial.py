# Generated by Django 5.1.3 on 2024-12-24 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Announcement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.CharField(max_length=100000000000)),
                ('author', models.CharField(max_length=100)),
                ('published_date', models.DateField()),
            ],
        ),
    ]