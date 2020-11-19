from django.contrib.auth.models import Group
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from blog.api.serializers import UserSerializer
from blog.models import User

# DRF decorators @action :
# https://www.django-rest-framework.org/api-guide/viewsets/#marking-extra-actions-for-routing
# https://ssungkang.tistory.com/entry/Django-ViewSet-%EA%B3%BC-Router


# DRF Google 로그인
# https://stackoverflow.com/questions/57252301/google-login-in-django-rest-framework-allauth-rest-auth

''' python manage.py makemigrations 실행 시
    Manager isn't available; 'auth.User' has been swapped for 'blog.User' 에러 발생시
    https://stackoverflow.com/questions/48823596/manager-isnt-available-auth-user-has-been-swapped-for-polls-user/48823691

    python manage.py migrate 실행 시
    migrations 폴더에 있는 __init__.py를 제외한 나머지 파일과 db.sqlite3 삭제 후 다시 실행
    https://covenant.tistory.com/32
'''

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # 누구나 접근 가능
    @action(detail=False,permission_classes=[permissions.AllowAny])
    def create(self, request, *args, **kwargs):
        print("asd")
        """
        사용자 등록
        """
        # data = request.data
        # print(data)

    @action(detail=False)
    def generate_users(self, request):
        """
        기본 사용자 추가 및 그룹 설정
        """

        # admin 그룹 생성
        role_admin = Group.objects.filter(name='ADMIN').first()
        if role_admin is None:
            role_admin = Group.objects.create(name="ADMIN")

        # user 그룹 생성
        role_user = Group.objects.filter(name='USER').first()
        if role_user is None:
            role_user = Group.objects.create(name="USER")

        # python manage.py createsuperuser로 어드민 생성해야함
        # admin user에 관리자 그룹 설정
        admin = User.objects.filter(email='admin@email.com').first()
        if admin is not None:
            if role_admin not in admin.groups.all():
                admin.groups.add(role_admin)
                admin.groups.add(role_user)

        # 일반 유저 계정 추가 및 유저 그룹 설정
        user = User.objects.filter(email="user@email.com").first()
        if user is None:
            user = User.objects.create_user(
                'user',
                'user@email.com',
                'abcd1234'
            )
        if user is not None:
            if role_user not in user.groups.all():
                user.groups.add(role_user)
        
        return Response(status=status.HTTP_200_OK)

    #https://github.com/netscout/AngularShop_sources/tree/master/chapter9/AngularShop/AngularShopDRF/shop

    #https://blog.naver.com/netscout82/222008511406

    #https://www.django-rest-framework.org/tutorial/quickstart/#urls