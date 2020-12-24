from django.shortcuts import render
from .models import Pessoa
from rest_framework import serializers as rest_serializers
from django.core import serializers
from django.http import HttpResponse, JsonResponse

def Sorteio(request):
    pessoas = Pessoa.objects.all()
    return render(request, 'sorteio/sorteio.html', {'pessoas':pessoas})

def PessoasJson(request):
    pessoas = Pessoa.objects.all()

    dict = []

    for pessoa in pessoas:
        p = {
            'nome': pessoa.nome,
            'foto': pessoa.foto.url,
        }

        dict.append(p)

    return JsonResponse(dict, safe=False)
