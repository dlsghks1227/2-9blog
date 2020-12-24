from rest_framework import serializers
from .models import Post

# class TagSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tag
#         fields = '__all__'

# ID는 모델 생성할 때 자동으로 생성됨
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'