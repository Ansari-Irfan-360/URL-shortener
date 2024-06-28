# URL Shortener

This web application allows user to shorten URLs with server-generated or custom short links.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Acknowledgements](#acknowledgements)

## Introduction

URL Shortener is a web application built to shorten long URLs into manageable short links. It allows you to use server-generated short links or user can customize them based on thier preferences.

## Features

- Shorten URLs with server-generated short links.
- Customize short links with user-defined URLs.
- Redirect visitors seamlessly from short links to original URLs.
- Track and manage shortened URLs with creation timestamps.

## Tech Stack

**Client:**
- React
- Material-UI
- Axios
- React Router

**Server:**
- Node.js
- Express
- MongoDB (Mongoose)
- CORS

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm or yarn
- MongoDB installed and running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/url-shortener.git
    cd url-shortener
    ```

2. Install dependencies for both client and server:

    ```bash
    # Install client dependencies
    cd client
    npm install

    # Install server dependencies
    cd ../server
    npm install
    ```

3. Set up environment variables:

    - Create a `.env` file in the `server` directory with the following content:

      ```plaintext
      MongoDB_URL=mongodb://localhost:27017/url-shortener
      CORS_URL=http://localhost:3000
      ```

      Adjust `MongoDB_URL` to match your MongoDB connection string.

4. Start the server and client:

    ```bash
    # Start the server (runs on http://localhost:4000)
    cd server
    npm start

    # Start the client (runs on http://localhost:3000)
    cd ../client
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter a URL you want to shorten in the input field.
3. Choose to use a custom short URL or let the server generate one.
4. Click "Submit" to generate the shortened URL.
5. Copy and share the shortened URL as needed.

## API Endpoints

- **POST `/save`**
  - Handles URL Validation and Formatting.
  - Creates a new shortened URL.
  - Handles Custom URLs Generation.
  - Manages Duplicate URLs.
  
- **GET `/get/:redirectFrom`**
  - Retrieves the original URL associated with a short link.

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Material-UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
