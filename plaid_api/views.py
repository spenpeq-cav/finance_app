from django.shortcuts import render, redirect
from decouple import config
from rest_framework.decorators import api_view
from requests import Request, post
from rest_framework import status
from rest_framework.response import Response
import plaid
from django.http import JsonResponse
from decouple import config

client = plaid.Client(client_id= config('PLAID_CLIENT_ID'), secret= config('PLAID_SECRET_SANDBOX'), environment='sandbox')

@api_view(['GET', 'POST'])
def create_link_token(request):
    data = {
        'user': {
            'client_user_id': 'test_id',
        },
        'products': ['auth','transactions'],
        'client_name': 'My App',
        'country_codes': ['US'],
        'language': 'en'
    }

    response = { 'link_token': client.post('link/token/create', data) }
    link_token = response['link_token']
    return JsonResponse(link_token)

def get_access_token(request):
    return({})
