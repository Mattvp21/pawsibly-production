# Generated by Django 4.0.1 on 2022-02-28 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_remove_message_thread'),
    ]

    operations = [
        migrations.AddField(
            model_name='sitter',
            name='title',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]