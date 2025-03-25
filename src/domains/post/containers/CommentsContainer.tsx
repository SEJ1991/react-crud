import { useQuery } from '@tanstack/react-query';
import { getPostComments } from '../services/commentService';
import Comments from '../components/Comments';
import { Error, Loading } from '../../../shared';

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

  if (isLoading)
    return (
      <div className='card relative h-[250px]'>
        <Loading />
      </div>
    );
  if (isError) return <Error />;
  return <Comments comments={comments} />;
}
