import { jpAxios } from '../../../shared';
import { CommentType } from '../types';

export const getPostComments = (postId: string) => async (): Promise<CommentType[]> => {
  const response = await jpAxios.get(`/posts/${postId}/comments`);
  return response.data;
};
