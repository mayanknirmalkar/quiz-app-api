# Quiz Api

Quiz Api is a web application built using Node.js, Express, and MongoDB to manage quizzes and quiz results. It includes features like user registration, quiz creation, and result retrieval.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)

## Introduction

Express Quiz App provides a platform for users to register, create quizzes, and participate in quizzes. It also includes secure routes for managing quizzes and results.

## Features

- User registration and authentication
- Quiz creation and retrieval
- Quiz participation and result retrieval
- Global error handling for consistent responses

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running
- A `.env` file with configuration details (see [`.env.example`](.env.example))

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/express-quiz-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd express-quiz-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file based on the provided example:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/quizapp
    ```

5. Start the server:

    ```bash
    npm start
    ```

## Usage

Visit `http://localhost:3000` in your browser to access the application. The API routes are available at `/`.

## Routes

### Unsecure Routes

- **POST /register**: User registration.
- **POST /login**: User login.

### Secure Routes

- **POST /quizzes**: Create a new quiz (requires authentication).
- **GET /quizzes/active**: Get active quizzes (requires authentication).
- **GET /quizzes/:id/result**: Get quiz result (requires authentication).
- **GET /quizzes/all**: Get all quizzes (requires authentication).
