import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import PostForm from '../components/PostForm';
import { getUsers } from '../../user/services/userService';
import { CardLoading, Error } from '../../../shared';
import { createPost } from '../services/postService';
import { useNavigate } from 'react-router';
import { PostFormType } from '../types';
import { toast } from 'sonner';

export function PostFormContainer() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: users, isLoading, isError } = useQuery({ queryKey: ['users'], queryFn: getUsers });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: createPost,
    onSettled: (_, error) => {
      if (error) {
        toast.error('Failure');
        return;
      }

      toast.success('Success');
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      navigate('/posts', { replace: true });
    },
  });

  const handleSubmit = (data: PostFormType) => {
    toast.message('Are you sure?', {
      action: {
        label: 'Post',
        onClick: () => {
          toast.promise(mutateAsync({ ...data, userId: Number(data.userId) }), {
            loading: 'Posting...',
          });
        },
      },
    });
  };

  const handleClickBackBtn = () => {
    navigate('/posts');
  };

  if (isLoading) return <CardLoading />;
  if (isError) return <Error needBackButtons />;
  return (
    <PostForm
      users={users}
      defaultValues={DEFAULT_VALUES}
      isPending={isPending}
      onClickBackBtn={handleClickBackBtn}
      onSubmit={handleSubmit}
    />
  );
}

const DEFAULT_VALUES = {
  title: '',
  body: '',
  userId: 0,
};
