from django.db import models

class Post(models.Model):
    title = models.CharField(
        verbose_name='title',
        max_length=100
    )
    body = models.TextField(
        verbose_name='body'
    )
    username = models.CharField(
        verbose_name='name',
        max_length=30,
    )
    created_at = models.DateTimeField(
        verbose_name='created time',
        auto_now_add=True
    )
    modified_at = models.DateTimeField(
        verbose_name='modified time',
        auto_now=True
    )

    class Meta:
        #기본 정렬 지정
        ordering = ["-created_at"]

    def __str__(self):
        return self.title