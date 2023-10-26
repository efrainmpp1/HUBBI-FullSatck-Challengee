from django.db import models
from dateutil.parser import parse

class TransactionType(models.Model):
    id = models.PositiveSmallIntegerField(primary_key=True)
    description = models.CharField(max_length=255)
    nature = models.CharField(max_length=10, choices=[('Entrada', 'Entrada'), ('Saída', 'Saída')])
    signal = models.CharField(max_length=1, choices=[('+', '+'), ('-', '-')])

    def __str__(self):
        return self.description
    
class Transaction(models.Model):
    transaction_type_id = models.ForeignKey(TransactionType, on_delete=models.DO_NOTHING)
    date = models.DateTimeField()
    product_description = models.CharField(max_length=30)
    amount_in_cents = models.IntegerField()
    seller_name = models.CharField(max_length=20)

    def __str__(self):
        return f"Transaction of {self.amount_in_cents} cents"

    def set_date(self, data_string):
        self.date = parse(data_string)
    
    def get_date_brl_format(self):
        date_time = self.date
        data_time_format = date_time.strftime("%d/%m/%Y às %H:%M:%S")
        return data_time_format
    
    def get_amount_in_reais(self):
        return self.amount_in_cents / 100.0

    def get_transaction_type_description(self):
        if self.transaction_type_id:
            return self.transaction_type_id.description
        return "No TransactionType associated" 