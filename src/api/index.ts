import axios from 'axios';
import { LOGIN_URL, SERVERS_URL } from '../shared/utils';
import {
  AuthenticateUserData,
  AuthenticateUserResponse,
  GetServersResponse,
} from '../shared/utils/types';

const login = async (data: AuthenticateUserData) => {
  try {
    const { data: responseData } = await axios.post<AuthenticateUserResponse>(
      LOGIN_URL,
      data,
    );

    return responseData;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

const getServers = async () => {
  try {
    const { data } = await axios.get<GetServersResponse>(SERVERS_URL);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export { login, getServers };
