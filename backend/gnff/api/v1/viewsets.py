from rest_framework import authentication
from gnff.models import Gghmjhgjhg
from .serializers import GghmjhgjhgSerializer
from rest_framework import viewsets


class GghmjhgjhgViewSet(viewsets.ModelViewSet):
    serializer_class = GghmjhgjhgSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Gghmjhgjhg.objects.all()
