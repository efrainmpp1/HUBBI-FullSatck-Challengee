# Serializers Documentation

This document provides an explanation of the serializers defined in the `serializers.py` file.

## TransactionTypeSerializer

The `TransactionTypeSerializer` serializes the `TransactionType` model.

### Fields

- `id` (AutoField): An auto-generated field representing the primary key.
- `description` (CharField): A string representing a description of the transaction type.
- `nature` (CharField): A string representing the nature of the transaction.
- `signal` (CharField): A string representing the signal of the transaction.

## TransactionSerializer

The `TransactionSerializer` serializes the `Transaction` model and includes additional fields from methods.

### Fields

- `id` (AutoField): An auto-generated field representing the primary key.
- `transaction_type_id` (ForeignKey): A reference to the related `TransactionType` object.
- `transaction_type_description` (SerializerMethodField): A method that returns the description of the associated `TransactionType`.
- `date` (DateTimeField): A timestamp representing the date and time of the transaction.
- `date_brl_format` (SerializerMethodField): A method that returns the date and time in Brazilian format (dd/mm/yyyy às HH:MM:SS).
- `product_description` (CharField): A string representing a brief description of the product.
- `amount_in_cents` (IntegerField): An integer representing the amount in cents.
- `seller_name` (CharField): A string representing the name of the seller.

### Serializer Methods

- `get_transaction_type_description(self, obj)`: Returns the description of the associated `TransactionType` object.
- `get_date_brl_format(self, obj)`: Returns the date and time in Brazilian format.

## Usage

These serializers are designed to convert complex data types (e.g., models) to native Python data types. They facilitate the representation of model instances and complex data types in a format suitable for the application's API.

For more information on how to use these serializers, please refer to the codebase and API documentation for details on their integration into the application.
