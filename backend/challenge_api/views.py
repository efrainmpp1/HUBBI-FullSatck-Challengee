from django.http import JsonResponse
from .models import TransactionType , Transaction
from.serializers import TransactionTypeSerializer , TransactionSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

def get_all_transaction_types(request):
  all_transaction_types = TransactionType.objects.all()
  all_transaction_types_serializer = TransactionTypeSerializer(all_transaction_types, many=True)
  return JsonResponse(all_transaction_types_serializer.data , safe=False)

@api_view(['GET','POST'])
def get_all_transaction(request):
  if request.method == 'GET' :
    transactions = Transaction.objects.all()
    transactions_serializer = TransactionSerializer(transactions,many=True)
    return JsonResponse(transactions_serializer.data , safe=False)
  
  if request.method == 'POST':
    new_transaction = request.data
    new_transaction_serializer = TransactionSerializer(data=new_transaction)
    if new_transaction_serializer.is_valid():
      new_transaction_serializer.save()
      return Response(new_transaction_serializer.data , status=status.HTTP_201_CREATED)
    
    return Response(new_transaction_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

