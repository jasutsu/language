from django.contrib import admin
from django.urls import path

from .views import MyLoginView, TestFunctionView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', MyLoginView.as_view(), name='login'),
    path('test/', TestFunctionView.as_view(), name='test'),
]
