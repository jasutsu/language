from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User

class MyLoginView(APIView):
    def post(self, request):
        try:
            validator = MyLoginValidation(request.data)

            data = {
                "username": request.data.get("username", ""),
                "password": request.data.get("password", ""),
            }
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            data = {
                "error": str(e),
            }
            return Response(data, status=status.HTTP_400_BAD_REQUEST)

class MyLoginValidation:
    def __init__(self, data):
        if "username" not in data:
            raise ValueError("No username in request body")
        if "password" not in data:
            raise ValueError("No password in request body")

        username = data.get("username")
        password = data.get("password")

        requested_user = User.objects.get(username=username, password=password)

class TestFunctionView(APIView):
    def get(self, request):
        try:
            user_validator = MyLoginValidation(request.query_params)

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