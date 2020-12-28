from django.urls import path
from . import views

urlpatterns = [
    path('', views.PostViewSet.as_view({
        'get': 'list',
        'post': 'create',
    })),
    path('<int:pk>/', views.PostViewSet.as_view({
        'get': 'retrieve',
        'delete': 'destroy',
        'patch': 'update'
    })),
    path('search/category/', views.PostSearchByCategoryViewSet.as_view()),
    path('search/username/', views.PostSearchByUsernameViewSet.as_view()),
]