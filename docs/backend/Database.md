# Database Configuration and Management Documentation

This document provides an explanation of the database configuration and management in the Django project.

## Database Configuration

The project's database is configured in the `settings.py` file under the `DATABASES` setting.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

- The database engine is set to 'sqlite3', which is a lightweight and built-in database provided by Django.
- The database file ('db.sqlite3') is created in the project's base directory.

## Database Management Commands

To manipulate the database, several management commands are available. You can run these commands from the command line.

### `makemigrations` Command

Use the following command to create new database migrations for the 'challenge_api' app:

- ```python3 manage.py makemigrations challenge_api``

This command generates migration files that represent changes to the database schema.

### `migrate` Command
After creating migrations, you should apply them to the database using the following command:

- ```python3 manage.py migrate```

The `migrate` command will update the database schema based on the generated migration files.

### `loaddata` Command

You can populate the database with initial data using the loaddata command. To do this, you can provide a JSON 
fixture file that contains the initial data for the 'TransactionType' model.

- ```python3 manage.py loaddata ./data/transaction_type_loaddata.json```

We find the file [here](../../backend/data/transaction_type_loaddata.json)