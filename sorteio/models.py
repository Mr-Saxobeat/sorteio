from django.db import models

class Pessoa(models.Model):
    nome = models.CharField(max_length=100)
    foto = models.ImageField(upload_to='foto/')

    def __str__(self):
        return self.nome
