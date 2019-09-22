import axios from 'axios';

require('dotenv/config');

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : 'https://hackathon-organizer-back.herokuapp.com',
});

export default api;
