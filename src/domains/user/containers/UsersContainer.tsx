import { useQuery } from '@tanstack/react-query';
import Users from '../components/Users';
import { getUsers } from '../services/userService';
import { useNavigate } from 'react-router';
import { Error, Loading } from '../../../shared';

export function UsersContainer() {
  const navigate = useNavigate();
  const { data: users, isLoading, isError } = useQuery({ queryKey: ['users'], queryFn: getUsers });

  const handleClickDetail = (id: number) => () => {
    navigate(`/users/${id}`);
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error needBackButtons />;
  return <Users users={users} onClickDetail={handleClickDetail} />;
}
