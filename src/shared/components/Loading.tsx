import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export function Loading(props: ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className={twMerge('size-full flex-center absolute inset-0', props.className)}>
      <span className='animate-bounce text-lg font-semibold'>🐣 Loading 🐣</span>
    </div>
  );
}
