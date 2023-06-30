# GAME

This project handles the Game logic, updates the database with scores to keep track of the Leaderboard, and enriches user data with gender guessing and mock data.

## Table of Contents

- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/game-project.git
Clone the repository to your local machine using the above command.

2. Navigate to the project directory:

   ```bash
   cd game-project
3. Install the dependencies:

   `` npm install ``

## Database Setup

The project uses a MySQL database for storing user and score data. Follow these steps to set up the database:

1. Ensure that you have Docker installed on your system.

2. Run the following command to start the MySQL database in a Docker container:

   ``docker-compose up -d``
   Note: Make sure to close the Docker container when you finish working with the project by running docker-compose down.

The database will be automatically created with the name "leaderboard". The connection details are as follows:

 ```json
  {
   "Host": "localhost",
   "Port": 3306,
   "Database": "leaderboard",
   "Username": "user",
   "Password": 123
}
  ```

Make sure these credentials match your local environment. If needed, you can modify the connection details in the project's configuration files.

## Usage

To start the server, run the following command:

``npm start``

The server will be running on http://localhost:3001.


## API Endpoints

The server exposes the following API endpoints:

- POST /game/score: Adds a score to a user.
  Request body format:
 ```json
  {
  "userName": "Dror",
  "score": 1
  }
  ```
- POST /game/user: Creates a new user. The username must be unique.
Request body format:
 ```json
  {
  "userName": "Dror"
  }
  ```
  
- GET /game/user: Retrieves all user data sorted by score.
  Response format:
 ```json
  {
   "users": [
      {
         "id": 1,
         "name": "Dror",
         "gender": "male",
         "address": "Gudenåvej6435SamsøDenmark",
         "email": "rasmus.sorensen@example.com",
         "dob": "1947-06-03T03:25:27.000Z",
         "age": 76,
         "phone": "15559989",
         "score": 5,
         "createdAt": "2023-06-30T08:03:33.000Z",
         "updatedAt": "2023-06-30T08:09:58.000Z",
         "deletedAt": null
      },
      {
         "id": 2,
         "name": "bob",
         "gender": "male",
         "address": "Grand Marais Ave9119HampsteadCanada",
         "email": "david.anderson@example.com",
         "dob": "1989-06-10T11:17:46.000Z",
         "age": 34,
         "phone": "J34 R78-2093",
         "score": 2,
         "createdAt": "2023-06-30T08:18:50.000Z",
         "updatedAt": "2023-06-30T08:18:59.000Z",
         "deletedAt": null
      }
   ]
}
  ```
