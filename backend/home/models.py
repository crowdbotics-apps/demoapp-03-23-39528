from django.conf import settings
from django.db import models
class Driver(models.Model):
    'Generated Model'
    name = models.TextField()
    number = models.IntegerField()
