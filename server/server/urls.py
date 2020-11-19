"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.models import User
from django.views.generic import TemplateView
from rest_framework import routers

from blog.api.views import UserViewSet

router = routers.DefaultRouter()
# r'' : raw string으로 생성
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/generate-users/', UserViewSet.as_view({
        'get': 'generate_users'
    })),
    path('Account', UserViewSet.as_view({
        'post': 'create'
    })),
    path('accounts/', include('allauth.urls')),

    # path('user/', UserListView.as_view(), name='user'),

    # path('', include(router.urls)),
    # path('api-auto/', include('rest_framework.urls', namespace='rest_framework')),
]
