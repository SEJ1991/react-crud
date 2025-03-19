import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export function PageFrame(props: ComponentPropsWithoutRef<'section'>) {
  return (
    <section {...props} className={twMerge('min-h-dvh layout-padding', props.className)}>
      {props.children}
    </section>
  );
}
