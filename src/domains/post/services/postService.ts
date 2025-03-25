import { jpAxios } from '../../../shared';
import { PostType } from '../types';

export const getPosts = async (): Promise<PostType[]> => {
  const response = await jpAxios.get('/posts');
  return response.data;
};

export const getPost = (id: string) => async (): Promise<PostType> => {
  const response = await jpAxios.get(`/posts/${id}`);
  return response.data;
};
