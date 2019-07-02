from django.db import models


class Signup(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=False)
    birthday = models.DateField()
    email = models.CharField(max_length=100, blank=False)
    # visited = models.BooleanField(default=False)

    class Meta:
        ordering = ('created',)
