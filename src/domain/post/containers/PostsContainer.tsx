import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { getPosts } from '../services/postService';
import { PageFrame } from '../../../shared';
import Posts from '../components/Posts';

export function PostsContainer() {
  const navigate = useNavigate();
  const { data: posts, isLoading } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  const handleClickDetail = (id: number) => () => {
    navigate(`/posts/${id}`);
  };

  const handleClickUser = (id: number) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    navigate(`/users/${id}`);
  };

  if (isLoading) return <div>loading</div>;
  return (
    <PageFrame>
      <Posts posts={posts} onClickDetail={handleClickDetail} onClickUser={handleClickUser} />
    </PageFrame>
  );
}
