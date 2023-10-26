from django.http import JsonResponse
from django.db.models import Sum
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
    transactions = Transaction.objects.all().reverse()
    transactions_serializer = TransactionSerializer(transactions,many=True)
    total_amount_in_cents = Transaction.objects.aggregate(total_amount_in_cents=Sum('amount_in_cents'))
    return JsonResponse({ "transactions" : transactions_serializer.data , 
    "total_amount_in_cents" : total_amount_in_cents['total_amount_in_cents']} , safe=False)
  
  if request.method == 'POST':
    new_transaction = request.data
    new_transaction_serializer = TransactionSerializer(data=new_transaction)
    if new_transaction_serializer.is_valid():
      new_transaction_serializer.save()
      return Response(new_transaction_serializer.data , status=status.HTTP_201_CREATED)
    
    return Response(new_transaction_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def massive_register_transaction(request):
    try:
        transactions = request.data['transactions']
        list_of_transactions = transactions

        for transaction_data in list_of_transactions:
            # Deserialize and validate the transaction data
            transaction_serializer = TransactionSerializer(data=transaction_data)
            
            if transaction_serializer.is_valid():
                # Save the transaction if it's valid
                transaction_serializer.save()
            else:
                # Handle invalid transaction data
                return Response(
                    {'message': 'Invalid transaction data', 'errors': transaction_serializer.errors},
                    status=status.HTTP_400_BAD_REQUEST
                )

        return Response(transactions, status=status.HTTP_201_CREATED)
    except Exception as e:
        # Handle other exceptions or errors here
        return Response(
            {'message': 'An error occurred', 'error_details': str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
