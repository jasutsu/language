from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

class MyLoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "access": str(refresh.access_token),
                "refresh": str(refresh)
            })
        return Response({"error": "Invalid Credentials"}, status=status.HTTP_400_BAD_REQUEST)

class TestFunctionView(APIView):
    def get(self, request):
        try:
            # user_validator = MyLoginValidation(request.query_params)

            data = {
                "city": "New York",
                "year": 2332
            }
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            data = {
                "error": str(e),
            }
            return Response(data, status=status.HTTP_400_BAD_REQUEST)