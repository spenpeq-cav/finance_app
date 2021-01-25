from django.shortcuts import render, redirect
from decouple import config
from rest_framework.views import APIView
from requests import Request, post
from rest_framework import status
from rest_framework.response import Response
import plaid
from django.http import JsonResponse

client = plaid.Client(client_id='PLAID_CLIENT_ID', secret='PLAID_SECRET', environment='sandbox')
/link/token/create 
def create_link_token(request):
    response = client.LinkToken.create({
        'user': {
            'client_user_id': '1',
        },
        'products': ['transactions'],
        'client_name': 'My App',
        'country_codes': ['US'],
        'language': 'en'
    })
    link_token = response['link_token']
    return JsonResponse(link_token)