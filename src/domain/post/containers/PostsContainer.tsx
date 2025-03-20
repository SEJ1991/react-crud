import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/postService';
import { PageFrame } from '../../../shared';
import Posts from '../components/Posts';
import { useNavigate } from 'react-router';

export function PostsContainer() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  const handleClickDetail = (id: number) => {
    navigate(`/posts/${id}`);
  };

  const handleClickUser = (id: number) => {
    navigate(`/users/${id}`);
  };

  if (isLoading) return <div>loading</div>;
  return (
    <PageFrame>
      <Posts />
    </PageFrame>
  );
}
