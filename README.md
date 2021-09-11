
# Authentication App
Authentication App makes API calls to server for Registering new user and Authenticating the already registered users.

## Introduction

A simple frontend for Authentication Application created with React JS and integrated with a backend which is hosted on heroku. Built with an aim to learn and implement creation of a React Frontend with a given backend. Authentication Application supports functionalities of Register and Login. The application makes API calls to the backend for the same. During the Login the server responds with a JWT token which is then stored in applications state.

## Getting Started

These are instructions to set up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

To clone and run this application, you'll need [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) (which comes with npm) installed on your computer.

### Installation

From your command line:

1. Clone the repo
   ```sh
   $ git clone https://github.com/Saima422/Login-Register-React.git
   ```
2. Install the Dependencies
   ```sh
   $ npm install
   ```
3. To start the App, use the following command
    ```sh
    $ npm run start
    ```
4. The React Application is now Up and Running


## Folder Structure
```
.
├── public 
|    ├── favicon.ico
|    ├── icon.ico
|    ├── index.html
|    ├── logo192.png
|    ├── logo512.png
|    └── manifest.json
├── README.md
├── src
|    ├── App.css
|    ├── App.js
|    ├── App.test.js
|    ├── components
|    │   ├── Footer
|    │   │   ├── Footer.jsx
|    │   │   └── Footer.module.scss
|    │   └── Navigation
|    │       ├── auth.png
|    │       ├── Navigation.jsx
|    │       └── Navigation.module.scss
|    ├── index.css
|    ├── index.js
|    ├── logo.svg
|    ├── pages
|    │   ├── Homepage
|    │   │   ├── Homepage.jsx
|    │   │   └── Homepage.module.scss
|    │   ├── LandingPage
|    │   │   ├── LandingPage.jsx
|    │   │   └── LandingPage.module.scss
|    │   ├── Login
|    │   │   ├── Login.jsx
|    │   │   └── Login.module.scss
|    │   └── Register
|    │       ├── Register.jsx
|    │       └── Register.module.scss
|    ├── reportWebVitals.js
|    ├── setupTests.js
|    └── utils
|        ├── LoginContext.js
|        └── ProtectedRoute.js
├── .gitignore
├── package-lock.json
└── package.json


```
## Application View

* `/` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/login-register-images/default-route.png)

* `/register` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/login-register-images/register-route.png)

* `/login` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/login-register-images/login-route.png)

* `/home` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/login-register-images/home-route.png)


## Scope and Functionality

#### Features:
* Form Validation 
* Storing State throughout application using Context in React
* Rendering of Components Dependent on LoggedIn state 
* React Routing implemented throughtout the Application


## Referred Resources
* [React](https://reactjs.org/docs/getting-started.html)
* [Context React](https://reactjs.org/docs/context.html)
* [React Routing](https://reactrouter.com/web/guides/quick-start)

## Contact

* Author - Saima Sayed 
* [Connect on LinkedIn](https://www.linkedin.com/in/saima-sayed-6482481b9/)
* [Project Resources (Frontend))](https://github.com/Saima422/Login-Register-React)
* [Netlify Live Link](https://admiring-perlman-1cdede.netlify.app/)








