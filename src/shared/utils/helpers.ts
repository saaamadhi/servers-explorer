// import nockLib from 'nock';
import axios from 'axios';
import { CompareFunction } from './types';

export const BASE_URL = 'https://playground.tesonet.lt/v1';
export const LOGIN_URL = `${BASE_URL}/tokens`;
export const SERVERS_URL = `${BASE_URL}/servers`;

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
