from rest_framework import serializers
from .models import TransactionType , Transaction

class TransactionTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = TransactionType
    fields = ['id' , 'description' , 'nature' , 'signal']

class TransactionSerializer(serializers.ModelSerializer):
  transaction_type_description = serializers.SerializerMethodField()
  def get_transaction_type_description(self, obj):
        return obj.get_transaction_type_description()
  class Meta:
    model = Transaction
    fields = [ 'transaction_type_id' , 'date' , 'product_description' , 'amount_in_cents' , 'seller_name' , 'transaction_type_description']
