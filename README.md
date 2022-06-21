# Imdb App

The IMDb app allows users to get all the details they need about movies and TV series.

Live Demo:
https://imdb-app-project.herokuapp.com/

## Technologies:

React,Node.js,Express.js,Redis.

## Description of the API:

The API contains 3 routers.

## API routes:

- api/movies - sends data of 10 movies stored in redis to the client while loading the app.<br>
- api//movies/:movieTitle - fetch 10 movies by given movie title.<br>
- api/movie/:movieId - fetch information about a specific movie.
- At all endpoints we fetching the data from the OMDb API only if we have got a miss with redis cache.

### The Client consist of 2 pages:

1.  404 Error Page:

    - The If the user tries to go to an undefined route he will get to the 404 error page which allows him to redirect to the Homepage.
    - Only if the user is a valid user he will be redirected to the dashboard page.

1.  Home Page:
    _ Contains the 3 main components of the app: SearchBar,Movie,Modal.
    _ SearchBar component:Fetch movies data from api/movies endpoint only after that the user stops typing after 0.5sec.
    _ Movie Component: A gallery of 10 movie cards, the data is retrieved from the endpoint API/movies/:movieTitle.
    _ Modal component: Clicking on one of the gallery's movie cards will return the movie data from the endpoint
    api/movie/:movie and will open a modal that will display the data obtained for this movie.

The app state is managed by Context API.

## Getting started:

### How to run the Client?
```
$ git clone https://github.com/dekelohad/IMDb.git
$ cd IMDb/frontend
$ npm install
$ create a .env file at the root of the project directory and within it, you will need to enter your OMDb API credentials.
$ npm start
# navigate to http://localhost:3000
 ```
 
### How to run the Server?
```
$ cd IMDb
$ npm install
$ redis-server
$ npm run server
navigate to http://localhost:5000
```


