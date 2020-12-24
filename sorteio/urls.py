from django.urls import path
from . import views

app_name = 'sorteio'

urlpatterns = [
    path('', views.Sorteio, name='sorteio'),
    path('pessoasjson/', views.PessoasJson, name='pessoasjson'),
]
