import Comments from '../components/Comments';

interface Props {
  postId?: string;
}
export function CommentsContainer({ postId = '' }: Props) {
  return <Comments />;
}
