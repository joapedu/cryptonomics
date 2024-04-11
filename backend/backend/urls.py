from django.contrib import admin # type: ignore

from django.urls import include, path # type: ignore
from django.views.generic import RedirectView # type: ignore

urlpatterns = [
    path('', RedirectView.as_view(url='/api/')),
    path("api/", include("api.urls")),
    path("admin/", admin.site.urls),
]

