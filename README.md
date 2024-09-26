# NatterChat

NatterChat is a real-time chat application that allows users to communicate with each other seamlessly. Built using modern web technologies, this application includes essential features like user authentication and a responsive chat interface.

## Features

- **User Authentication**: Users can sign up and log in to their accounts.
- **Real-time Chat**: Communicate with other logged-in users instantly.
- **User-Friendly Interface**: A clean and intuitive design for an enjoyable chat experience.
- **Logout Functionality**: Easily log out from the application.

## Technologies Used

- **Frontend**: 
  - React.js
  - CSS

- **Backend**: 
  - Node.js
  - Express.js

- **Database**: 
  - MongoDB

## Installation

### Install the Dependencies

```bash
cd client
npm install
cd ..
cd server
npm install
```

### Run the Application

```bash
cd server
npm start
cd ..
cd client
npm run dev
```

# Running with Docker
## To run the application using Docker, follow these steps:

- Install docker and run this command
```
docker compose up -d
```
This command will build the images for the frontend and backend, start the MongoDB container, and run everything in the defined network.

## Accessing the Application:

- The frontend will be accessible at http://localhost:5173.
- The backend will be accessible at http://localhost:8747.
- MongoDB will be available at mongodb://mongodb:27017.

## Stopping the Application: To stop all running containers, you can use:

```
docker compose down
```
This command will stop and remove the containers defined in your docker-compose.yaml.