import axios from 'axios';

export const jpAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
