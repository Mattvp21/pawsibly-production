# Generated by Django 4.0.1 on 2022-02-13 19:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_reciever_thread_receiver'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='thread',
        ),
        migrations.AddField(
            model_name='thread',
            name='messages',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='api.message'),
            preserve_default=False,
        ),
    ]
