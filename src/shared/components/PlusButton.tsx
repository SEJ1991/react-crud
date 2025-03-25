import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export function PlusButton(props: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        'flex-center size-12 p-4 border-0 border-gray-shadow font-bold',
        props.className
      )}
    >
      +
    </button>
  );
}
