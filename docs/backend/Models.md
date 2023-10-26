# Models Documentation

This document provides an explanation of the fields and functions in the `models.py` file.

## TransactionType Model

The `TransactionType` model represents different transaction types.

### Fields

- `id` (Primary Key): A positive small integer that serves as the primary key.
- `description` (CharField): A string representing a description of the transaction type.
- `nature` (CharField): A string representing the nature of the transaction, with choices 'Entrada' (Income) or 'Saída' (Outcome).
- `signal` (CharField): A string representing the signal of the transaction, with choices '+' or '-'.

### Functions

- `__str__(self)`: Returns a string representation of the `TransactionType` object.

## Transaction Model

The `Transaction` model represents individual transactions.

### Fields

- `transaction_type_id` (Foreign Key): A reference to the related `TransactionType` object.
- `date` (DateTimeField): A timestamp representing the date and time of the transaction.
- `product_description` (CharField): A string representing a brief description of the product.
- `amount_in_cents` (IntegerField): An integer representing the amount in cents.
- `seller_name` (CharField): A string representing the name of the seller.

### Functions

- `__str__(self)`: Returns a string representation of the `Transaction` object.
- `set_date(self, data_string)`: Parses and sets the `date` field using a date string.
- `get_date_brl_format(self)`: Returns the date and time in Brazilian format (dd/mm/yyyy às HH:MM:SS).
- `get_amount_in_reais(self)`: Returns the amount in Brazilian Reais (R$).
- `get_transaction_type_description(self)`: Returns the description of the associated `TransactionType` object or a default message if there is no associated type.

## Usage

These models are designed to store and manage transactions and their types within the application.

For more information, please refer to the codebase for details on how these models are used and integrated into the application.
