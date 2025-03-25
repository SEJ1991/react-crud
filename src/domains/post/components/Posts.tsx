import { AtomicCard } from '../../../shared';
import { PostType } from '../types';

interface Props {
  posts?: PostType[];
  onClickDetail: (id: number) => () => void;
}
export default function Posts({ posts = [], onClickDetail }: Props) {
  return (
    <ul className='columns-2 sm:columns-3 lg:columns-5 gap-4'>
      {posts.map(({ id, title, body, userId }) => (
        <li key={id} className='mb-4 break-inside-avoid cursor-pointer hovering'>
          <AtomicCard onClick={onClickDetail(id)}>
            <AtomicCard.Heading className='line-clamp-2'>{title}</AtomicCard.Heading>
            <AtomicCard.Contents className='line-clamp-3'>{body}</AtomicCard.Contents>
            <AtomicCard.AtomicLink to={`/users/${userId}`}>User: {userId}</AtomicCard.AtomicLink>
          </AtomicCard>
        </li>
      ))}
    </ul>
  );
}
