import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'http://localhost:3000/';
const REQUEST_TIMEOUT = 5000;

const createAPI= (): AxiosInstance  => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,

    (error) => Promise.reject(error),
  );

  return api;
};

export { createAPI };
