from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('link_token/', views.create_link_token, name="link_token")
]