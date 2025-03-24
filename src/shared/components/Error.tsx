import { ComponentPropsWithoutRef } from 'react';
import { AtomicCard } from './AtomicCard';
import { useNavigate } from 'react-router';

interface Props extends ComponentPropsWithoutRef<'div'> {
  needBackButtons?: boolean;
}
export function Error({ needBackButtons, ...props }: Props) {
  const navigate = useNavigate();

  const handleClickBackBtn = () => {
    navigate(-1);
  };

  const handleClickHomeBtn = () => {
    navigate('/', { replace: true });
  };

  return (
    <AtomicCard {...props} className='flex-center size-full'>
      <AtomicCard.Heading className='text-red-400 text-3xl font-semibold'>
        Error !!
      </AtomicCard.Heading>
      <AtomicCard.Contents className='text-2xl'>Error is occurred.</AtomicCard.Contents>
      {needBackButtons && (
        <div className='flex gap-2'>
          <AtomicCard.Button className='hovering' onClick={handleClickBackBtn}>
            Back
          </AtomicCard.Button>
          <AtomicCard.Button className='hovering' onClick={handleClickHomeBtn}>
            Back to home
          </AtomicCard.Button>
        </div>
      )}
    </AtomicCard>
  );
}
