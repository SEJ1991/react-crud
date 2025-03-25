import { useQuery } from '@tanstack/react-query';
import User from '../components/User';
import { getUser } from '../services/userService';
import { useNavigate } from 'react-router';
import { CardLoading, Error } from '../../../shared';

interface Props {
  id?: string;
}
export function UserContainer({ id = '' }: Props) {
  const navigate = useNavigate();
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['users', id], queryFn: getUser(id) });

  const handleClickBackBtn = () => {
    navigate('/users');
  };

  if (isLoading) return <CardLoading />;
  if (!user || isError) return <Error needBackButtons />;
  return <User user={user} onClickBackBtn={handleClickBackBtn} />;
}
