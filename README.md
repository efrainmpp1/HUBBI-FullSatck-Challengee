# HUBBI-FullStack-Challenge

Test to evaluate programming skills

## Project Description
Web interface for uploading .txt files containing product sales transactions, normalizing the data, and storing it in a relational database. The interface can also display the list of imported product transactions by producer/affiliate, with a totalizer of the transaction values.

## Completed Tasks
#### **Functional Requirements**
- [ X ] Have a screen (via a form) to upload the file
- [ X ] Parse the received file, normalize the data, and store it in a relational database, following the file interpretation definitions
- [ X ] Display the list of imported product transactions by producer/affiliate, with a totalizer of the transaction values
- [ X ] Implement error handling on the backend and report friendly error messages on the frontend.

#### **Non-Functional Requirements**
- [ X ] The application should be easy to set up and run, compatible with Unix environments. You should use only free or open-source libraries.
- [ X ] Use Docker for the different services that make up the application to ensure it works easily outside your personal environment.
- [ X ] Use any relational database.
- [ X ] Use small commits in Git and write a good description for each one.
- [ X ] Make the code as readable and clean as possible.
- [ X ] Write code (names and comments) in English. Documentation can be in Portuguese if you prefer.

#### **Bonus Requirements**
- [ X ] Have documentation for the backend APIs.
- [ X ] Use Docker Compose to orchestrate the services as a whole.
- [ X ] Have all documentation written in easily understandable English.
- [  ] Handle authentication and/or authorization.

## Technologies Used
#### **FrontEnd**
- NodeJs v18.14.0
- React JS (Framework with Javascript)
- Vite
- Yarn (Package Manager)
- AXios (API connection)

#### **BackEnd**
- Python 3.10.1
- Django
- Django-Rest
- Django ORM

#### **Database**
- SQLite3 (included in Django settings)

#### **Docker**
- docker-compose (to orchestrate the services as a whole)

## How to Run

- Clone this repository
- Access the repository folder via the terminal

### **With Docker-Compose**
If your machine has [Docker](https://docs.docker.com/get-docker/) installed, you can run the application via Docker Compose.

- Run the command `docker-compose up -d`

After a few seconds of building, the services will be available for use. The Backend is accessible at [http://localhost:8000/](http://localhost:8000/), while the FrontEnd is accessible at [http://localhost:5173/](http://localhost:5173/).

### **Normal Way**

#### Frontend
- Enter into frontend folder ```cd frontend```
- Run ```yarn``` to install node_modules and dependencies
- Run ```yarn dev``` to run project

FrontEnd is accessible at [http://localhost:5173/](http://localhost:5173/).

#### Backend
- Enter into frontend folder ```cd backend```
- Create a virtual environment called venv with ```virtualenv venv```
- Activate venv : ```source venv/bin/activate```
- Install projects libs and dependencies```pip3 install -r requirements.txt```
- Run ```python3 manage.py makemigrations challenge_api```
- Run ```python3 manage.py migrate```
- Run ```python3 manage.py runserver```

The Backend is accessible at [http://localhost:8000/](http://localhost:8000/)

## Documentation

The project's documentation can be found [here](./docs/)


> This is a challenge by [Hubbi](https://app.hubbi.app/)