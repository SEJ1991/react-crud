import { jpAxios } from '../../../shared';
import { Post } from '../types';

export const getPosts = async (): Promise<Post[]> => {
  const response = await jpAxios.get('/posts');
  return response.data;
};
