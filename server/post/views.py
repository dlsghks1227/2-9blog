from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.views import APIView

from .serializers import PostSerializer
from .models import Post

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # 인증이 없으면 Read 작업만 가능
    permission_classes = [IsAuthenticatedOrReadOnly]

    # def get(self, request):
    #     posts = Post.objects.all()
    #     # many: 다수의 데이터 queryset 형태를 serialize화 하고자 할 때 True
    #     serializers = PostSerializer(posts, many=True)
    #     return Response(serializers.data, status=status.HTTP_200_OK)

    # def post(self, request):
    #     serializers = PostSerializer(data=request.data)
    #     if not serializers.is_valid(raise_exception=True):
    #         return Response({"message": "Request Body Error."}, status=status.HTTP_400_BAD_REQUEST)
    #     serializers.save()
    #     return Response({"message": "ok"}, status=status.HTTP_201_CREATED)