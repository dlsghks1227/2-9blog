from django.urls import path, re_path
from . import views

urlpatterns = [
    path('create/', views.createUser),
    re_path(r'update/(?P<username>\w+)/$', views.UserProfileViewSet.as_view({
        'put': 'update',
        'patch': 'partial_update'
    }), name='username'),
    path('login/', views.login),
    path('validate/', views.validateJWT),
    path('profile/', views.getUserProfile),
]
