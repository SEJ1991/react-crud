import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { getPosts } from '../services/postService';
import Posts from '../components/Posts';
import { Error, Loading, PlusButton } from '../../../shared';

export function PostsContainer() {
  const navigate = useNavigate();
  const { data: posts, isLoading, isError } = useQuery({ queryKey: ['posts'], queryFn: getPosts });

  const handleClickDetail = (id: number) => () => {
    navigate(`/posts/${id}`);
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error needBackButtons />;
  return (
    <>
      <Posts posts={posts} onClickDetail={handleClickDetail} />;
      <PlusButton className='fixed right-8 bottom-8 rounded-full z-10 bg-white hovering' />
    </>
  );
}
