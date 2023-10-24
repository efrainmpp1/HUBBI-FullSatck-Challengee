from django.http import JsonResponse
from .models import TransactionType , Transaction
from.serializers import TransactionTypeSerializer , TransactionSerializer

def get_all_transaction_types(request):
  all_transaction_types = TransactionType.objects.all()
  all_transaction_types_serializer = TransactionTypeSerializer(all_transaction_types, many=True)
  return JsonResponse(all_transaction_types_serializer.data , safe=False)

def get_all_transaction(request):
  transactions = Transaction.objects.all()
  transactions_serializer = TransactionSerializer(transactions,many=True)
  return JsonResponse(transactions_serializer.data , safe=False)
