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

def index():
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
