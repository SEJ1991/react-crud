import { useQuery } from '@tanstack/react-query';
import { getPost } from '../services/postService';
import { useNavigate } from 'react-router';
import Post from '../components/Post';
import { Error } from '../../../shared';

interface Props {
  id?: string;
}
export function PostContainer({ id = '' }: Props) {
  const navigate = useNavigate();
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: getPost(id),
  });

  const handleClickBackBtn = () => {
    navigate('/posts');
  };

  if (isLoading) return <div>loading</div>;
  if (!post || isError) return <Error needBackButtons />;
  return <Post post={post} onClickBackBtn={handleClickBackBtn} />;
}
