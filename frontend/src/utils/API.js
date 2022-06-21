import axios from 'axios';

export default axios.create({
  baseURL: 'https://imdb-app-project.herokuapp.com/api',
  responseType: 'json',
});
