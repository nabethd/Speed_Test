# Storemaven Speed Game - Client

This is the client-side code for the Storemaven Speed Game. It is a React application that allows users to test their typing speed by pressing the correct key at the right time.

## Installation

To run the client application locally, follow these steps:

1. Install dependencies:
   ```shell
    npm install
2. Start the development server:
   ```shell
    npm start
3. Open your browser and visit http://localhost:3000 to access the application.

## Usage
### Main Page
The main page (Main) is the entry point of the application. It allows users to enter their name and start the speed test.

Enter your name in the input field.
Click the "Start" button to begin the game.
If the entered name is already taken, an error message will be displayed below the input field in red color.

### Game Page
The game page (Game) is where the speed test takes place. Users need to press the correct key (either 'A' or 'L') at the right time.

Two indicators will be shown, either on the left or the right side.
Pay attention to the indicator that appears and press the corresponding key. 
you will only have 1 second !
- If you press the key too soon, a "Too Soon" message will be displayed.
- If you press the too late, a "Too Late" message will be displayed.
- If you press the wrong key, a "Wrong Key" message will be displayed.
- If you press the key at the right time, a "Success" message will be displayed, and your score will be added to the leaderboard.

the game immediately restart after either a Success Or Failed attempt

### Folder Structure
The client project has the following folder structure:

- src: Contains the source code of the React application.
- API: Includes the API functions for interacting with the server.
- Components: Contains reusable components used throughout the application.
- Pages: Contains the main and game pages.
- App.tsx: The root component of the application.
- index.tsx: The entry point of the application.

### Additional Information
This client-side code interacts with the server-side code for handling user creation and score updates. Make sure to set up and run the server-side code before running the client application. see the Server ReadMe for more information

The client application uses React Router for navigation between pages. The routes are defined in the App.tsx file.
