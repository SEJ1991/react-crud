import { ComponentPropsWithoutRef } from 'react';

export function Loading(props: ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className='animate-bounce text-lg font-semibold'>
      🐣 Loading 🐣
    </div>
  );
}
