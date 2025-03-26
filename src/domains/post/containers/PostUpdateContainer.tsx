import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import PostForm from '../components/PostForm';
import { getUsers } from '../../user/services/userService';
import { CardLoading, Error } from '../../../shared';
import { useLocation, useNavigate } from 'react-router';
import { PostFormType, PostType } from '../types';
import { toast } from 'sonner';
import { getPost, updatePost } from '../services/postService';

interface Props {
  id?: string;
}
export function PostUpdateContainer({ id = '' }: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();
  const statePost: PostType | undefined = location.state?.post;

  const { data: users, isLoading, isError } = useQuery({ queryKey: ['users'], queryFn: getUsers });

  const {
    data: fallbackPost,
    isLoading: isGetPostLoading,
    isError: isGetPostError,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: getPost(id),
    enabled: !statePost,
  });

  const { mutateAsync } = useMutation({
    mutationFn: updatePost,
    onSettled: (newPost, error) => {
      if (!newPost || error) {
        toast.error('Failure');
        return;
      }
      toast.success('Success');
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['posts', id] });
      navigate(`/posts/${id}`, { state: { post: newPost } });
    },
  });

  const post = statePost ?? fallbackPost;

  const handleSubmit = (data: PostFormType) => {
    toast.warning('Are you sure?', {
      action: {
        label: 'Update',
        onClick: () => {
          toast.promise(mutateAsync({ id, data }), {
            loading: 'Updating...',
          });
        },
      },
    });
  };

  const handleClickBackBtn = () => {
    navigate(`/posts/${id}`, { state: { post } });
  };

  if (isLoading || isGetPostLoading) return <CardLoading />;
  if (!post || isGetPostError || isError) return <Error needBackButtons />;
  const defaultValues = getDefaultValues(post);

  return (
    <PostForm
      users={users}
      defaultValues={defaultValues}
      onClickBackBtn={handleClickBackBtn}
      onSubmit={handleSubmit}
    />
  );
}

function getDefaultValues({ body, title, userId }: PostType): PostFormType {
  return {
    body,
    title,
    userId,
  };
}
