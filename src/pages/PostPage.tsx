import { useParams } from 'react-router';
import { PostContainer } from '../domains/post/containers/PostContainer';
import { PageFrame } from '../shared';

export function PostPage() {
  const { id } = useParams();
  return (
    <PageFrame>
      <PostContainer id={id} />
    </PageFrame>
  );
}
