"""Arquivo de urls da api"""
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('reset_password', views.ResetPasswordView.as_view(), name='reset_password'),
]
