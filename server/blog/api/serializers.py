from rest_framework import serializers, viewsets, permissions
from blog.models import User

'''
직렬화(serializer): queryset, 모델 인스턴스와 같은 데이터를 JSON, XML 또는 다른 컨텐츠 유형으로 변환하기 위한 역할
'''

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        field = ['id', 'username', 'email']