import { useQuery } from '@tanstack/react-query';
import User from '../components/User';
import { getUser } from '../services/userService';

interface Props {
  id?: string;
}
export function UserContainer({ id = '' }: Props) {
  const { data: user, isLoading } = useQuery({ queryKey: ['users', id], queryFn: getUser(id) });

  if (isLoading) return <div>loading</div>;
  if (!user) return <div>undefined user, this id is {id}.</div>;
  return <User user={user} onClickBackBtn={console.log} />;
}
