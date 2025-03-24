import { useQuery } from '@tanstack/react-query';
import User from '../components/User';
import { getUser } from '../services/userService';
import { useNavigate } from 'react-router';

interface Props {
  id?: string;
}
export function UserContainer({ id = '' }: Props) {
  const navigate = useNavigate();
  const { data: user, isLoading } = useQuery({ queryKey: ['users', id], queryFn: getUser(id) });

  const handleClickBackBtn = () => {
    navigate('/users');
  };

  if (isLoading) return <div>loading</div>;
  if (!user) return <div>undefined user, this id is {id}.</div>;
  return <User user={user} onClickBackBtn={handleClickBackBtn} />;
}
