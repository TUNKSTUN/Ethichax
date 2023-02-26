import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ethichax.azurewebsites.net/',
});

export default instance;
