import { useParams } from 'react-router';
import { PostContainer } from '../domains/post/containers/PostContainer';

export function PostPage() {
  const { id } = useParams();
  return <PostContainer id={id} />;
}
