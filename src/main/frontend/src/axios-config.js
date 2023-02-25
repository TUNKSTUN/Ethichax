import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-1677300384071.azurewebsites.net/',
});

export default instance;
