# Generated by Django 3.1.4 on 2020-12-31 15:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0002_course_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='slug',
        ),
    ]
