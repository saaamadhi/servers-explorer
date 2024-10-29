// import nockLib from 'nock';
import axios from 'axios';
import { CompareFunction } from './types';

export const baseUrl = 'https://playground.tesonet.lt/v1';
export const loginUrl = `${baseUrl}/tokens`;
export const serversUrl = `${baseUrl}/servers`;

export const TOKEN = 'token';

export const sortDesc: CompareFunction = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN);

    if (token) {
      // eslint-disable-next-line
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
