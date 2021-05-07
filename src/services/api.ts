import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.2.120:3335',
  baseURL: 'api',
});

export default api;
