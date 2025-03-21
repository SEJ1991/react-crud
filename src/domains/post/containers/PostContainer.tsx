import { useQuery } from '@tanstack/react-query';
import { PageFrame } from '../../../shared';
import { getPost } from '../services/postService';
import { useNavigate } from 'react-router';

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
  return <PageFrame>{id}</PageFrame>;
}
