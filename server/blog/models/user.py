from django.db import models
from django.utils import timezone

class User(models.Model):
    user_id = models.CharField(max_length=30)

    def __str__(self):
        return self.user_id

from django.contrib import admin
from blog.models.user import User

# User 모델을 Admin에 등록
admin.site.register(User)