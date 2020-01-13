import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:333',
});

export default api;
