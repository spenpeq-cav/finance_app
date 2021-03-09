from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('link_token/', views.create_link_token, name="link_token"),
    path('access_token/', views.get_access_token, name="access_token"),
    path('accounts/', views.get_accounts, name="accounts"),
    path('transactions/', views.get_transactions, name="transactions")
]