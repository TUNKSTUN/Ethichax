import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.113:8443/',
});

export default instance;
