# Generated by Django 4.0.1 on 2022-02-13 19:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_message_thread_thread_messages'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='thread',
            name='messages',
        ),
    ]
