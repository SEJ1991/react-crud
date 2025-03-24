export interface PostType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
