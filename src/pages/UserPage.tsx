import { useParams } from 'react-router';
import { UserContainer } from '../domains/user';
import { PageFrame } from '../shared';

export function UserPage() {
  const { id } = useParams();
  return (
    <PageFrame>
      <UserContainer id={id} />
    </PageFrame>
  );
}
