import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.4:3000/api',  // Backend'in IP'si ve portu
  timeout: 5000,
});

export default api;
