from django.http import JsonResponse
from .models import TransactionType
from.serializers import TransactionTypeSerializer

def get_all_transaction_types(rerquest):
  all_transaction_types = TransactionType.objects.all()
  all_transaction_types_serializer = TransactionTypeSerializer(all_transaction_types, many=True)
  return JsonResponse(all_transaction_types_serializer.data , safe=False)
