from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.createUser),
    path('update/', views.UserProfileViewSet.as_view()),
    path('login/', views.login),
    path('validate/', views.validateJWT),
    path('profile/', views.getUserProfile),
]