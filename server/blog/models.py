# https://tothefullest08.github.io/django/2019/06/21/Django26_relations5_ManyToMany_follow/
# AbstrctUser : 기존의 User 모델을 사용하지만, 추가적인 정보를 더 넣을 수 있다.
from django.contrib.auth.models import AbstractUser, models

class User(AbstractUser):
    # 이메일: 로그인에 사용하기 때문에 중복이 있으면 안되므로, unique 설정
    email = models.CharField(max_length=255, unique=True)

    # 로그인에 이름 대신 이메일 사용
    USERNAME_FIELD = 'email'
    # 이름은 필수 입력 필드
    REQUIRED_FIELDS = ['username']

    class Meta:
        # DB에 생성될 테이블 이름
        db_table = "Users"