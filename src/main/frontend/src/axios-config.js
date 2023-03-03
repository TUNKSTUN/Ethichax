import axios from 'axios';

const instance = axios.create({
//  baseURL: 'https://ethichax.azurewebsites.net/',
baseURL: 'http://localhost:8443/',
});

export default instance;
