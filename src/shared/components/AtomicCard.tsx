import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * 기본 스타일이 적용되어 있는 아토믹 카드 컴포넌트.
 * @description 아토믹 컴포넌트별 커스텀 스타일은 물론 각 고유한 element의 속성들을 설정할 수 있다.
 */
export function AtomicCard(props: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={twMerge('card flex flex-col justify-center items-start gap-2', props.className)}
    >
      {props.children}
    </div>
  );
}

function Heading(props: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3 {...props} className={twMerge('text-2xl font-semibold line-clamp-2', props.className)}>
      {props.children}
    </h3>
  );
}

function Contents(props: ComponentPropsWithoutRef<'p'>) {
  return (
    <p {...props} className={twMerge('line-clamp-3', props.className)}>
      {props.children}
    </p>
  );
}

function Button(props: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        'text-right self-end cursor-pointer transition-colors ease-in-out duration-300 hover:underline hover:text-red-400',
        props.className
      )}
    >
      {props.children}
    </button>
  );
}

AtomicCard.Heading = Heading;
AtomicCard.Contents = Contents;
AtomicCard.Button = Button;
