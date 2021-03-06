# Generated by Django 3.1.4 on 2020-12-31 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_id', models.CharField(max_length=10)),
                ('course_name', models.CharField(max_length=30)),
                ('teaching_assistant', models.CharField(max_length=30)),
                ('course_hours', models.IntegerField()),
                ('credit_hours', models.IntegerField()),
                ('calender_reference', models.URLField()),
                ('end_date', models.DateField()),
            ],
        ),
    ]
