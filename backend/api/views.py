"""Arquivo de views da api"""
from django.http import HttpResponse
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth import authenticate
from django.contrib.auth import login
from django.contrib.auth import logout
from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import FavCoins
from api.serializers import FavCoinsSerializer

def index(request): # pylint: disable=unused-argument
    """Resposta da tela de api"""
    return HttpResponse("🚧🚧🚧🚧🚧🚧🚧  Em Construção  🚧🚧🚧🚧🚧🚧🚧")

class LoginView(APIView):
    """Classe da api de login"""
    def post(self, request):
        """Método post de login"""
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    """Classe da api de logout"""
    def post(self, request):
        """Método post de logout"""
        logout(request)
        return Response(status=status.HTTP_200_OK)

class RegisterView(APIView):
    """Classe da api de registro"""
    def post(self, request):
        """Método post de registro"""
        username = request.data.get('username')
        password = request.data.get('password')
        if not User.objects.filter(username=username).exists():
            User.objects.create_user(username=username, password=password)
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class ResetPasswordView(APIView):
    """Classe da api de mudança de senha"""
    def post(self, request):
        """Método post de resetar senha"""
        email = request.data.get('email')
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            reset_link = f'http://cryptonomic.com.br/reset-password/{uid}/{token}/'
            send_mail(
                'Redefinição de Senha',
                f'Clique no seguinte link para resetar sua senha: {reset_link}',
                'from@cryptonomic.com',
                [email],
                fail_silently=False,
            )
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class FavCoinsView(APIView):
    """ Listar ou cadastrar moedas favoritas """
    def get(self, request): # pylint: disable=unused-argument
        """ Lista as moedas favoritas """
        coins = FavCoins.objects.all()
        dados = []
        for coin in coins:
            serializer = FavCoinsSerializer(coin)
            dados.append({
                'id': coin.id,
                'dados': serializer.data
            })
        return Response(dados, status=status.HTTP_200_OK)

    def post(self, request):
        """ Cadastra as moedas favoritas """
        serializer = FavCoinsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FavCoinsDetailView(APIView):
    """ Listar, atualizar ou deletar uma moeda favorita """
    def get_object(self, pk):
        """ Trazer o PK primary key """
        try:
            return FavCoins.objects.get(pk=pk)
        except Exception as exc:
            raise exc

    def get(self, request, pk): # pylint: disable=unused-argument
        """ Listar moeda favorita """
        coin = self.get_object(pk)
        serializer = FavCoinsSerializer(coin)
        dado = {
            'id': coin.id,
            'dados': serializer.data
        }
        return Response(dado, status=status.HTTP_200_OK)

    def put(self, request, pk):
        """ Atualizar moeda favorita """
        coin = self.get_object(pk)
        serializer = FavCoinsSerializer(coin, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk): # pylint: disable=unused-argument
        """ Deletar moeda favorita """
        coin = self.get_object(pk)
        coin.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
