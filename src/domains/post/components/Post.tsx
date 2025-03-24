import { AtomicCard } from '../../../shared/components';
import { PostType } from '../types';

interface Props {
  post: PostType;
  onClickBackBtn: () => void;
}
export default function Post({ post: { title, body }, onClickBackBtn }: Props) {
  return (
    <AtomicCard>
      <button
        className='p-2 rounded-md border cursor-pointer transition-colors duration-500 ease-in-out hover:text-red-400'
        onClick={onClickBackBtn}
      >
        Back to list
      </button>
      <AtomicCard.Heading>{title}</AtomicCard.Heading>
      <AtomicCard.Contents>{body}</AtomicCard.Contents>
    </AtomicCard>
  );
}
