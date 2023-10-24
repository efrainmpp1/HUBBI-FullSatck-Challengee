from django.contrib import admin
from django.urls import path
from challenge_api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('transaction_types/' , views.get_all_transaction_types),
    path('transaction/' , views.get_all_transaction),
    path('massive_register_transactions/',views.massive_register_transaction)
]
