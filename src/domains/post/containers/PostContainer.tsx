import { useQuery } from '@tanstack/react-query';
import { getPost } from '../services/postService';
import { useNavigate } from 'react-router';
import Post from '../components/Post';

interface Props {
  id?: string;
}
export function PostContainer({ id = '' }: Props) {
  const navigate = useNavigate();
  const { data: post, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: getPost(id),
  });

  const handleClickBackBtn = () => {
    navigate('/posts');
  };

  if (isLoading) return <div>loading</div>;
  if (!post) return <div>undefined post, this id is {id}.</div>;
  return <Post post={post} onClickBackBtn={handleClickBackBtn} />;
}
