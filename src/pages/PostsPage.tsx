import { Posts } from '../domain/post/components/Posts';
import { PageFrame } from '../shared';

export function PostsPage() {
  return (
    <PageFrame>
      <Posts />
    </PageFrame>
  );
}
