import { PageFrame } from '../shared';

export function Home() {
  return (
    <PageFrame className='flex-center flex-col gap-4'>
      <h1 className='text-red-600 text-xl sm:text-4xl'>React + Typescript CRUD Project.</h1>
      <h2 className='text-red-400 text-lg sm:text-2xl'>Domain struckture.</h2>
    </PageFrame>
  );
}
