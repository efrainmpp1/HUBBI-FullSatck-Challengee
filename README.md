# HUBBI-FullStack-Challenge

Test to evaluate programming skills

## Project Description
Web interface for uploading .txt files containing product sales transactions, normalizing the data, and storing it in a relational database. The interface can also display the list of imported product transactions by producer/affiliate, with a totalizer of the transaction values.

## Completed Tasks
#### **Functional Requirements**
- [x] Have a screen (via a form) to upload the file
- [x] Parse the received file, normalize the data, and store it in a relational database, following the file interpretation definitions
- [x] Display the list of imported product transactions by producer/affiliate, with a totalizer of the transaction values
- [ ] Implement error handling on the backend and report friendly error messages on the frontend.

#### **Non-Functional Requirements**
- [x] The application should be easy to set up and run, compatible with Unix environments. You should use only free or open-source libraries.
- [x] Use Docker for the different services that make up the application to ensure it works easily outside your personal environment.
- [x] Use any relational database.
- [x] Use small commits in Git and write a good description for each one.
- [ ] Make the code as readable and clean as possible.
- [x] Write code (names and comments) in English. Documentation can be in Portuguese if you prefer.

#### **Bonus Requirements**
- [ ] Have documentation for the backend APIs.
- [x] Use Docker Compose to orchestrate the services as a whole.
- [ ] Have all documentation written in easily understandable English.
- [ ] Handle authentication and/or authorization.

## Technologies Used
#### **FrontEnd**
- React JS (JavaScript)
- Vite
- Yarn (Package Manager)
- Axios (API connection)

#### **BackEnd**
- Django (Python)
- Django-Rest
- Django ORM

#### **Database**
- SQLite3 (included in Django settings)

#### **Docker**
- docker-compose (to orchestrate the services as a whole)

## How to Run

#### **With Docker-Compose**
If your machine has [Docker](https://docs.docker.com/get-docker/) installed, you can run the application via Docker Compose. Simply follow these steps:

- Clone this repository
- Access the repository folder via the terminal
- Run the command `docker-compose up -d`

After a few seconds of building, the services will be available for use. The Backend is accessible at [http://localhost:8000/](http://localhost:8000/), while the FrontEnd is accessible at [http://localhost:5173/](http://localhost:5173/).

## Documentation

The project's documentation can be found [here](./docs/README.md)


> This is a challenge by [Hubbi](https://app.hubbi.app/)