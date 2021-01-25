from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('test/', views.test, name="test")
]