import { useQuery } from '@tanstack/react-query';
import Users from '../components/Users';
import { getUsers } from '../services/userService';
import { useNavigate } from 'react-router';

export function UsersContainer() {
  const navigate = useNavigate();
  const { data: users, isLoading } = useQuery({ queryKey: ['users'], queryFn: getUsers });

  const handleClickDetail = (id: number) => () => {
    navigate(`/users/${id}`);
  };

  if (isLoading) return <div>loading</div>;
  return <Users />;
}
