from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'test': '/test/',
    }
    return Response(api_urls)

@api_view(['GET'])
def test(request):
    test_data = {
        'name': 'John',
        'phone': '123-234-4355',
    }
    return Response(test_data)
