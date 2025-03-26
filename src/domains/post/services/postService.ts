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

export const createPost = async (data: PostFormType) => {
  const response = await jpAxios.post('/posts', data);
  return response.data;
};

export const updatePost = async ({
  id,
  data,
}: {
  id: string;
  data: PostFormType;
}): Promise<PostType> => {
  const response = await jpAxios.patch(`/posts/${id}`, data);
  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await jpAxios.delete(`/posts/${id}`);
  return response.data;
};
