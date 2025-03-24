import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { getPosts } from '../services/postService';
import Posts from '../components/Posts';
import { Error } from '../../../shared';

export function PostsContainer() {
  const navigate = useNavigate();
  const { data: posts, isLoading, isError } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  const handleClickDetail = (id: number) => () => {
    navigate(`/posts/${id}`);
  };

  if (isLoading) return <div>loading</div>;
  if (isError) return <Error needBackButtons />;
  return <Posts posts={posts} onClickDetail={handleClickDetail} />;
}
