from django.db import models
from django.contrib.auth import get_user_model


class Thread(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='+')
    receiver = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='+')