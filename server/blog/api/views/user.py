from rest_framework import generics, serializers
from rest_framework.response import Response

from blog.models import User

class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User            # 모델 설정
        fields = ('id', 'user_id')    # 필드 설정

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserListSerializer