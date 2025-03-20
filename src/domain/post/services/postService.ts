import { jpAxios } from '../../../shared';

export const getPosts = async (): Promise<unknown> => {
  const response = await jpAxios.get('/posts');
  return response.data;
};
