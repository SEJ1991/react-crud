import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentPropsWithoutRef<'div'> {
  innerWrapper?: string;
  textClassName?: string;
}
export function CardLoading({ innerWrapper, textClassName, ...props }: Props) {
  return (
    <div {...props} className={twMerge('relative card h-50', props.className)}>
      <div className={twMerge('size-full flex-center absolute inset-0', innerWrapper)}>
        <span className={twMerge('animate-bounce text-lg font-semibold', textClassName)}>
          🐣 Loading 🐣
        </span>
      </div>
    </div>
  );
}
