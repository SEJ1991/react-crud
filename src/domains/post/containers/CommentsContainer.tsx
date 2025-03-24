import { useQuery } from '@tanstack/react-query';
import { getPostComments } from '../services/commentService';
import Comments from '../components/Comments';

interface Props {
  postId?: string;
}
export function CommentsContainer({ postId = '' }: Props) {
  const { data: comments, isLoading } = useQuery({
    queryKey: ['post', postId, 'comments'],
    queryFn: getPostComments(postId),
  });

  if (isLoading) return <div>loading</div>;
  return <Comments comments={comments} />;
}
