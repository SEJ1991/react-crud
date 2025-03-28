import { useParams } from 'react-router';
import { PageFrame } from '../shared';
import { PostUpdateContainer } from '../domains/post';

export function PostUpdatePage() {
  const { id } = useParams();
  return (
    <PageFrame>
      <PostUpdateContainer id={id} />
    </PageFrame>
  );
}
