from django.db import models

class TransactionType(models.Model):
    id = models.PositiveSmallIntegerField(primary_key=True)
    description = models.CharField(max_length=255)
    nature = models.CharField(max_length=10, choices=[('Entrada', 'Entrada'), ('Saída', 'Saída')])
    sinal = models.CharField(max_length=1, choices=[('+', '+'), ('-', '-')])

    def __str__(self):
        return self.description