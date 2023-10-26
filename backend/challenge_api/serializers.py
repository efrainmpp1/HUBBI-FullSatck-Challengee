from rest_framework import serializers
from .models import TransactionType , Transaction

class TransactionTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = TransactionType
    fields = ['id' , 'description' , 'nature' , 'signal']

class TransactionSerializer(serializers.ModelSerializer):
  transaction_type_description = serializers.SerializerMethodField()
  date_brl_format = serializers.SerializerMethodField()

  def get_transaction_type_description(self, obj):
    return obj.get_transaction_type_description()
  
  def get_date_brl_format(self , obj):
    return obj.get_date_brl_format()
  class Meta:
    model = Transaction
    fields = [ 'id' ,'transaction_type_id' , 'transaction_type_description' , 'date' , 'date_brl_format' , 'product_description' , 'amount_in_cents' , 'seller_name']
