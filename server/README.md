# Jolu Group Security Server

This is the backend server for the Jolu Group Security website. It is built with Node.js and Express.

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Create a `.env` file:**

    Create a `.env` file in the `server` directory and add the following environment variables:

    ```
    EMAIL_HOST=<your_email_host>
    EMAIL_PORT=<your_email_port>
    EMAIL_SECURE=<your_email_secure>
    EMAIL_USER=<your_email_user>
    EMAIL_PASS=<your_email_password>
    EMAIL_TO=<your_email_address>
    ```

3.  **Start the server:**

    ```bash
    npm start
    ```

    The server will start on port 3001.

## Deployment

You can deploy this server to a free service like Render or Railway.

### Render

1.  Create a new "Web Service" on Render.
2.  Connect your Git repository.
3.  Set the "Build Command" to `npm install`.
4.  Set the "Start Command" to `npm start`.
5.  Add your environment variables in the "Environment" section.

### Railway

1.  Create a new project on Railway.
2.  Connect your Git repository.
3.  Railway will automatically detect the `package.json` and deploy the application.
4.  Add your environment variables in the "Variables" section.
