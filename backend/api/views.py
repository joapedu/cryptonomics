from django.http import HttpResponse # type: ignore
from django.utils.http import urlsafe_base64_encode # type: ignore
from django.utils.encoding import force_bytes # type: ignore

from rest_framework import status # type: ignore
from rest_framework.response import Response # type: ignore
from rest_framework.views import APIView # type: ignore

from django.contrib.auth import authenticate, login, logout # type: ignore
from django.contrib.auth.models import User # type: ignore
from django.contrib.auth.tokens import default_token_generator # type: ignore

from django.core.mail import send_mail # type: ignore

def index(request):
    return HttpResponse("🚧🚧🚧🚧🚧🚧🚧  Em Construção  🚧🚧🚧🚧🚧🚧🚧")

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if not User.objects.filter(username=username).exists():
            user = User.objects.create_user(username=username, password=password)
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class ResetPasswordView(APIView):
    def post(self, request):
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
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
