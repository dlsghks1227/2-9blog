from django.contrib.auth  import get_user_model, authenticate
from django.contrib.auth.models import update_last_login
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from .models import User

'''
User 모델 불러오기
get_user_model: 유저 모델 클래스를 반환
AUTH_USER_MODEL: 유저 모델 지정 str 반환
'''

User = get_user_model()

JWT_PAYLOAD_HANDLER = api_settings.JWT_PAYLOAD_HANDLER
JWT_ENCODE_HANDLER = api_settings.JWT_ENCODE_HANDLER

class UserCreateSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=64)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, attrs):
        email = attrs.get('email', None)
        password = attrs.get('password', None)
        user = authenticate(email=email, password=password)

        if user is None:
            return {
                'email': 'None'
            }
        try:
            payload = JWT_PAYLOAD_HANDLER(user)
            jwt_token = JWT_ENCODE_HANDLER(payload)
            update_last_login(None, user)
        except User.DoesNotExist:
            raise serializers.ValidationError(
            'User with given email and password does not exists'
            )
            
        return {
            'email': user.email,
            'username': user.username,
            'token': jwt_token
        }

class UserProfileSerializer(serializers.ModelSerializer):
    # email = serializers.EmailField(max_length=64)
    # username = serializers.CharField(max_length=30)
    # photo = serializers.ImageField()
    # introduce = serializers.CharField()
    class Meta:
        model = User
        fields = ['email', 'username', 'photo', 'introduce']
