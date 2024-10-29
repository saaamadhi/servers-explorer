import axios from 'axios';
import { loginUrl, serversUrl } from '../shared/utils';
import {
  AuthenticateUserData,
  AuthenticateUserResponse,
  GetServersResponse,
} from '../shared/utils/types';

const login = async (data: AuthenticateUserData) => {
  try {
    const { data: responseData } = await axios.post<AuthenticateUserResponse>(
      loginUrl,
      data,
    );

    return responseData;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

const getServers = async () => {
  try {
    const { data } = await axios.get<GetServersResponse>(serversUrl);

    return data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export { login, getServers };
