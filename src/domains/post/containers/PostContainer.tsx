import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deletePost, getPost } from '../services/postService';
import { useNavigate } from 'react-router';
import Post from '../components/Post';
import { CardLoading, Error } from '../../../shared';
import { toast } from 'sonner';

interface Props {
  id?: string;
}
export function PostContainer({ id = '' }: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: getPost(id),
  });

  const { mutateAsync } = useMutation({
    mutationFn: deletePost,
    onSettled: (_, error) => {
      if (error) {
        toast.error('Failure');
        return;
      }

      toast.success('Success');
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['posts', id] });
      navigate('/posts', { replace: true });
    },
  });

  const handleClickBackBtn = () => {
    navigate('/posts');
  };

  const handleClickUpdateBtn = () => {};

  const handleClickDeleteBtn = () => {
    toast.warning('Are you sure?', {
      action: {
        label: 'Delete',
        onClick: () => {
          toast.promise(mutateAsync(id), {
            loading: 'Deleting...',
          });
        },
      },
    });
  };

  if (isLoading) return <CardLoading className='mb-4' />;
  if (!post || isError) return <Error needBackButtons />;
  return (
    <Post
      post={post}
      onClickBackBtn={handleClickBackBtn}
      onClickUpdateBtn={handleClickUpdateBtn}
      onClickDeleteBtn={handleClickDeleteBtn}
    />
  );
}
