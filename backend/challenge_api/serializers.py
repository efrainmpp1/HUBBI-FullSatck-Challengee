from rest_framework import serializers
from .models import TransactionType

class TransactionTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = TransactionType
    fields = ['id' , 'description' , 'nature' , 'signal']
