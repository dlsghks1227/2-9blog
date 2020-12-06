from django.conf.urls import include
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register('p', viewset=views.PostViewSet)

urlpatterns = [
    path('', include(router.urls))
]
