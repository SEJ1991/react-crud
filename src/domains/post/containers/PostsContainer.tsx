import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { getPosts } from '../services/postService';
import Posts from '../components/Posts';

export function PostsContainer() {
  const navigate = useNavigate();
  const { data: posts, isLoading } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  const handleClickDetail = (id: number) => () => {
    navigate(`/posts/${id}`);
  };

  if (isLoading) return <div>loading</div>;
  return <Posts posts={posts} onClickDetail={handleClickDetail} />;
}
