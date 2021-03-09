from django.shortcuts import render, redirect
from decouple import config
from rest_framework.decorators import api_view
from requests import Request, post
from rest_framework import status
from rest_framework.response import Response
import plaid
from django.http import JsonResponse
from decouple import config
import json

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

@api_view(['GET', 'POST'])
def get_access_token(request):
    body_data = json.loads(request.body.decode())
    public_token = body_data['public_token']
    

    exchange_response = client.Item.public_token.exchange(public_token)
    access_token = exchange_response['access_token']
    
    return JsonResponse(exchange_response)

@api_view(['POST'])
def get_accounts(request):
    body_data = json.loads(request.body.decode())
    access_token = body_data['access_token']
    
    accounts_response = client.Accounts.get(access_token)
    return JsonResponse(accounts_response)

@api_view(['POST'])
def get_transactions(request):
    body_data = json.loads(request.body.decode())
    access_token = body_data['access_token']
    
    transactions_response = client.Transactions.get(access_token, start_date='2021-02-09', end_date='2021-03-09')
    return JsonResponse(transactions_response)