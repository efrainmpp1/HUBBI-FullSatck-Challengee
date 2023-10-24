from rest_framework import serializers
from .models import TransactionType , Transaction

class TransactionTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = TransactionType
    fields = ['id' , 'description' , 'nature' , 'signal']

class TransactionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Transaction
    fields = ['id' , 'transaction_type_id' , 'date' , 'product_description' , 'amount_in_cents' , 'seller_name']
