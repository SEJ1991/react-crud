import { AtomicCard } from '../../../shared/components';
import { Post } from '../types';

interface Props {
  posts?: Post[];
  onClickDetail: (id: number) => () => void;
  onClickUser: (id: number) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export default function Posts({ posts = [], onClickDetail, onClickUser }: Props) {
  return (
    <ul className='columns-2 sm:columns-3 lg:columns-5 gap-4'>
      {posts.map(({ id, title, body, userId }) => (
        <li key={id} className='mb-4 break-inside-avoid cursor-pointer hovering'>
          <AtomicCard onClick={onClickDetail(id)}>
            <AtomicCard.Heading className='line-clamp-2'>{title}</AtomicCard.Heading>
            <AtomicCard.Contents className='line-clamp-3'>{body}</AtomicCard.Contents>
            <AtomicCard.Button onClick={onClickUser(userId)}>User: {userId}</AtomicCard.Button>
          </AtomicCard>
        </li>
      ))}
    </ul>
  );
}
