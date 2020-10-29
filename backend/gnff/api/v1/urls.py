from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import GghmjhgjhgViewSet

router = DefaultRouter()
router.register("gghmjhgjhg", GghmjhgjhgViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
