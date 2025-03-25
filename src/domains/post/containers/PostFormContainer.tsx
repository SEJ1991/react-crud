import PostForm from '../components/PostForm';

export function PostFormContainer() {
  return <PostForm users={[]} onSubmit={console.log} />;
}
