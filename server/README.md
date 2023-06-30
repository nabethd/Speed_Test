# GAME

This project handle the Game logic,
Update the DB with all scores for keeping track of the Leaderboard,
Enrich the user data with gender guessing and add mock data,

## How to run the code

## Initiate the MySQL-DB in Docker using:

`` docker-compose up -d ``

dont forget to close the Docker when finishing with:
`` docker-compose down ``

### Using NPM

`` npm start``

## How to Interact with the server

after initializing the DB and starting the project we can reach this Endpoint:

- POST - /game/score
- POST - /game/user
- GET - /game/user

POST - /game/score: adding to a user score value

example body request:

``
{
"userName": "Dror",
"score": 1
}
``

POST - /game/user: creating a new user (must be unique userName)

example body request:

``
{
"userName": "Dror",
}
``

GET - /game/user: getting all users data sorted by score 