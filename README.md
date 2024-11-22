# Chat Website

This is a MERN (MongoDB, Express, React, Node.js) stack chat application that allows users to send and receive messages in real-time.

## Project Structure
```sh
├── backend/
│   ├── .env                # Environment variables (MongoDB URI, etc.)
│   ├── models/
│   │   └── ChatMessage.js   # Mongoose schema for chat messages
│   ├── package.json         # Backend dependencies
│   └── server.js            # Express server setup
├── frontend/
│   ├── .gitignore           # Git ignore file for frontend
│   ├── package.json         # Frontend dependencies
│   ├── public/
│   │   ├── index.html       # HTML template for the React app
│   │   ├── manifest.json    # Web app manifest
│   │   └── robots.txt       # Robots.txt for SEO
│   └── src/
│       ├── App.css          # Main CSS file for App
│       ├── App.js           # Main component for React app
│       ├── App.test.js      # Test file for the App component
│       ├── ChatRoom.js      # Chat room component
│       ├── index.css        # Global CSS for the React app
│       ├── index.js         # Entry point for React app
│       ├── reportWebVitals.js # Performance reporting setup for React
│       └── setupTests.js    # Test setup file
├── .gitignore               # Global Git ignore file (for root)
```


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
