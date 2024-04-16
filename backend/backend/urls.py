"""Arquivo de urls do projeto"""
from django.contrib import admin

from django.urls import include, path
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url='/api/')),
    path("api/", include("api.urls")),
    path("admin/", admin.site.urls),
]
