import { jpAxios } from '../../../shared';
import { UserType } from '../types';

export const getUsers = async (): Promise<UserType[]> => {
  const response = await jpAxios.get('/users');
  return response.data;
};
