import { AtomicCard } from '../../../shared';
import { PostType } from '../types';

interface Props {
  post: PostType;
  onClickBackBtn: () => void;
  onClickUpdateBtn: () => void;
  onClickDeleteBtn: () => void;
}
export default function Post({
  post: { title, body },
  onClickBackBtn,
  onClickUpdateBtn,
  onClickDeleteBtn,
}: Props) {
  return (
    <AtomicCard className='mb-4'>
      <div className='w-full flex justify-between'>
        <button
          className='transition-colors duration-500 ease-in-out hover:text-red-400'
          onClick={onClickBackBtn}
        >
          Back to list
        </button>
        <div className='flex gap-2'>
          <button className='border-0 bg-gray-400 text-white hovering' onClick={onClickUpdateBtn}>
            Modify
          </button>
          <button className='border-0 bg-red-500 text-white hovering' onClick={onClickDeleteBtn}>
            Delete
          </button>
        </div>
      </div>
      <AtomicCard.Heading>{title}</AtomicCard.Heading>
      <AtomicCard.Contents>{body}</AtomicCard.Contents>
    </AtomicCard>
  );
}
