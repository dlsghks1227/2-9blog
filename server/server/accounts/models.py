from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .managers import UserManager

# AbstractBaseUser: 완전히 새로운 User 모델을 상속받아 새로 정의한다.
# AbstractUser: 추상 클래스와 같이 필드가 있는 완전한 사용자 모델, 상속하고 고유한 프로필 필드 및 메서드 추가 가능

class User(AbstractBaseUser, PermissionsMixin):
    '''
    Customized User

    AbstractBaseUser를 상속받아 사용하기 때문에 password 필드는 따로 생성할 필요가 없다.
    '''
    email = models.EmailField(
        verbose_name='email id',
        max_length=64,
        unique=True,
        help_text='EMAIL ID.'
    )
    username = models.CharField(
        max_length=30,
    )
    is_staff = models.BooleanField(
        verbose_name='staff status',
        default=False,
    )
    is_active = models.BooleanField(
        verbose_name='active',
        default=True,
    )
    date_joined = models.DateTimeField(
        verbose_name='data joined',
        default=timezone.now
    )

    objects = UserManager()

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    
    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'
    
    def __str__(self):
        return self.username

    def get_short_name(self):
        return self.email
