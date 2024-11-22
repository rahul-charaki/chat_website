# Chat Website

This is a MERN (MongoDB, Express, React, Node.js) stack chat application that allows users to send and receive messages in real-time.

## Project Structure
 
. ├── backend 
  │ ├── .env 
  │ ├── models 
  │ │ └── ChatMessage.js 
  │ ├── package.json 
  │ └── server.js 
. ├── frontend 
  │ ├── .gitignore 
  │ ├── package.json 
  │ ├── public 
  │ │ ├── index.html 
  │ │ ├── manifest.json 
  │ │ └── robots.txt 
  │ └── src 
  │ ├── App.css 
  │ ├── App.js 
  │ ├── App.test.js 
  │ ├── ChatRoom.js 
  │ ├── index.css 
  │ ├── index.js 
  │ ├── reportWebVitals.js 
  │ └── setupTests.js 
├── .gitignore


## Backend

The backend is built using Node.js, Express, and MongoDB.

### Setup

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI:
    ```
    MONGO_URI=your_mongodb_uri
    ```

4. Start the server:
    ```sh
    npm start
    ```

### Endpoints

- `GET /messages`: Fetch all chat messages.
- `POST /messages`: Send a new chat message.

### Models

- [`ChatMessage`](backend/models/ChatMessage.js): Defines the schema for chat messages.

## Frontend

The frontend is built using React.

### Setup

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

### Components

- [`App`](frontend/src/App.js): Main component that renders the `ChatRoom` component.
- [`ChatRoom`](frontend/src/ChatRoom.js): Component that handles fetching and sending chat messages.

### Testing

To run the tests:
```sh
npm test