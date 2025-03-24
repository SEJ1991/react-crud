import { useParams } from 'react-router';
import { PostContainer, CommentsContainer } from '../domains/post';
import { PageFrame } from '../shared';

export function PostPage() {
  const { id } = useParams();
  return (
    <PageFrame>
      <PostContainer id={id} />
      <CommentsContainer postId={id} />
    </PageFrame>
  );
}
