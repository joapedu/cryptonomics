"""Models das APIs do sistema"""
from django.db import models

class FavCoins(models.Model):
    """Model de moedas favoritas"""

    # Sigla -Ticker da moeda
    sigla = models.CharField(max_length=4, blank=False, default='')

    # Nome da moeda
    nome = models.CharField(max_length=30, blank=False, default='')
