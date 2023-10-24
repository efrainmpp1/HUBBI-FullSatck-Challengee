FROM python:3.10.1-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

RUN python3 manage.py makemigrations challenge_api

RUN python3 manage.py migrate

RUN python3 manage.py loaddata ./data/transaction_type_loaddata.json

CMD ["python3" , "manage.py" , "runserver" , "0.0.0.0:8000"]