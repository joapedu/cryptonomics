"""Serializer das APIs do sistema"""
from rest_framework import serializers

from api.models import FavCoins

class FavCoinsSerializer(serializers.HyperlinkedModelSerializer):
    """Serializer de moedas favoritas"""

    class Meta: # pylint: disable=too-few-public-methods
        """Repassando o model e os campos"""
        model = FavCoins
        fields = ('sigla', 'nome')
