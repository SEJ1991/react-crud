import { useQuery } from '@tanstack/react-query';
import { getPostComments } from '../services/commentService';
import Comments from '../components/Comments';
import { CardLoading, Error } from '../../../shared';

interface Props {
  postId?: string;
}
export function CommentsContainer({ postId = '' }: Props) {
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['post', postId, 'comments'],
    queryFn: getPostComments(postId),
  });

  if (isLoading) return <CardLoading className='h-30' />;
  if (isError) return <Error />;
  return <Comments comments={comments} />;
}
