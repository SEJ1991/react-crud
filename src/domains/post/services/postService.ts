import { jpAxios } from '../../../shared';
import { PostFormType, PostType } from '../types';

export const getPosts = async (): Promise<PostType[]> => {
  const response = await jpAxios.get('/posts');
  return response.data;
};

export const getPost = (id: string) => async (): Promise<PostType> => {
  const response = await jpAxios.get(`/posts/${id}`);
  return response.data;
};

export const createPost = async (data: PostFormType): Promise<PostType[]> => {
  const response = await jpAxios.post('/posts', data);
  return response.data;
};
