# About

Omdb App is a fullstack application that allows to search through a movie database.
It uses the OMDb open API ([http://www.omdbapi.com/](http://www.omdbapi.com/)).

## Requirements

Npm with version 7.x or higher is required to support workspaces used in this project.

## Installation

```
$ npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs both api server and client app in development mode.\
In this mode 2 servers are launched simultaneously:\
The API server is launched on port 8080 by default.\
A static server is launched on port 3000 by default to serve the client app.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Note: You can change server and client ports by respectively setting `SERVER_PORT` and `PORT` environment variables.**

### `npm run build`

Builds the app for production to the `dist` folder.\
In production mode only one server is launched which serve client app static files and API endpoints.

### `npm run prod`

**Note: Work in progress: CSP issues, see Todos.**

Launches the server in production mode on port 8080 by default.\
Requires to build the project beforehand!\

**Note: You can change server port by setting `SERVER_PORT` environment variable.**

### `npm test`

Launches the tests of both server and client projects.\

### `npm run lint`

Runs linter on both server and client projects.\
Linting errors will be printed on console, not automatically fixed even when possible.\

### Options

Options can be overwritten by setting the following environnement variables:
- `PORT`: The client app endpoint port (only in development mode).
- `SERVER_PORT`: The backend server endpoint port.
- `OMDB_API_KEY`: The OMDb API key used by the backend server to hit the movie databases.

## Todos

Means of improvement:

### About the code

- Factorize some hook logic into custom hooks to clarify the code.
- Prefetch next page images in movie search.
- Eject create-react-app and edit scripts to allow linter to run when compiling (automatic eslint check is disabled due to conflicts and should be run manually).
- Setup docker image and store them on github Containers at every release (with workflow).
- Remove hardcoded OMDb Api key, store it has github secret and build docker image with it as built-time secret.
- Add more unit tests.
- Fix CSP issues fetching posters in production mode.

### About features

- Allow to change number of movie results per page.
- Add more search filters (e.g.: type, year, language, genre).
- Manage users with profile page, allow to mark movies, add comments, select movies wanting to see, group movies by user list.
