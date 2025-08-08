# Jolu Group Security

This repository contains the source code for the Jolu Group Security website.

## Project Structure

-   `/client`: The frontend React application.
-   `/server`: The backend Node.js/Express server.

## Getting Started

### Prerequisites

-   Node.js and npm
-   Git

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <YOUR_GIT_URL>
    ```

2.  **Install frontend dependencies:**

    ```bash
    cd client
    npm install
    ```

3.  **Install backend dependencies:**

    ```bash
    cd ../server
    npm install
    ```

### Running the Application

1.  **Start the backend server:**

    ```bash
    cd server
    npm start
    ```

    The server will start on port 3001.

2.  **Start the frontend development server:**

    ```bash
    cd ../client
    npm run dev
    ```

    The frontend will be available at `http://localhost:5173`.

## Environment Variables

### Frontend

Create a `.env` file in the `client` directory and add the following environment variable:

```
VITE_API_URL=http://localhost:3001
```

### Backend

Create a `.env` file in the `server` directory and add the following environment variables:

```
EMAIL_HOST=<your_email_host>
EMAIL_PORT=<your_email_port>
EMAIL_SECURE=<your_email_secure>
EMAIL_USER=<your_email_user>
EMAIL_PASS=<your_email_password>
EMAIL_TO=<your_email_address>
```

## Deployment

### Frontend (Vercel)

1.  Create a new project on Vercel.
2.  Connect your Git repository.
3.  Set the "Root Directory" to `client`.
4.  Vercel will automatically detect the Vite configuration and deploy the application.
5.  Add your environment variables in the "Environment Variables" section.

### Backend (Render)

1.  Create a new "Web Service" on Render.
2.  Connect your Git repository.
3.  Set the "Root Directory" to `server`.
4.  Set the "Build Command" to `npm install`.
5.  Set the "Start Command" to `npm start`.
6.  Add your environment variables in the "Environment" section.
