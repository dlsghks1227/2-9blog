import re
from rest_framework import generics, viewsets, filters, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .serializers import PostSerializer
from .models import Post

class PostViewSet(viewsets.ModelViewSet):
    """
    목록, 생성, 검색, 수정, 삭제
    `list`, `create`, `retrieve`, `update`, `destroy`
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # 인증이 없으면 Read 작업만 가능
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ['=username']

    def create(self, request, *args, **kwargs):
        post = request.data
        # print(post.pop('tags'))
        return super().create(request, *args, **kwargs)

class PostSearchWithCategoryViewSet(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def post(self, request):
        try:
            if not request.data.get('category'):
                return Response({"message" : "Invalid category"}, status=status.HTTP_409_CONFLICT)
            post = self.get_queryset().filter(category=request.data['category'])
            queryset = self.filter_queryset(post)
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializers = self.get_serializer(page, many=True)
                return self.get_paginated_response(serializers.data)
            serializers = self.get_serializer(queryset, many=True)
            return Response(serializers.data)
        except Post.DoesNotExist:
            return Response({"message" : "Invalid category"}, status=status.HTTP_409_CONFLICT)

class PostSearchWithTagViewSet(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def post(self, request):
        try:
            if not request.data.get('tags'):
                return Response({"message" : "Invalid tags"}, status=status.HTTP_409_CONFLICT)
            post = self.get_queryset().filter(tags__text__in=request.data['tags'])
            queryset = self.filter_queryset(post)
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializers = self.get_serializer(page, many=True)
                return self.get_paginated_response(serializers.data)
            serializers = self.get_serializer(queryset, many=True)
            return Response(serializers.data)
        except Post.DoesNotExist:
            return Response({"message" : "Invalid tags"}, status=status.HTTP_409_CONFLICT)


# class TagViewSet(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         tags = [tag.text for tag in Tag.objects.all()]
#         return Response(tags, status=status.HTTP_200_OK)

#     def post(self, request):
#         serializers = TagSerializer(data=request.data)
#         if not serializers.is_valid(raise_exception=True):
#             return Response({"message": "Request Body Error."}, status=status.HTTP_400_BAD_REQUEST)
        
#         if Tag.objects.filter(text=serializers.validated_data["text"]).first() is None:
#             serializers.save()
#             return Response({"message" : "ok"}, status=status.HTTP_201_CREATED)
        
#         return Response({"message" : "duplicate tag"}, status=status.HTTP_409_CONFLICT)

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