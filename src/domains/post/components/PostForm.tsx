import { UserType } from '../../user/types';

interface Props {
  users: UserType[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function PostForm({ users, onSubmit }: Props) {
  return (
    <form
      className='size-full card mb-4 flex-center flex-col gap-4'
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <fieldset className='size-full flex flex-col gap-4'>
        <legend className='text-2xl mb-4'>Post</legend>
        <input name='title' className='w-full border-normal sm:w-100' placeholder='title' />
        <textarea
          name='body'
          className='w-full border-normal sm:w-125 md:w-175'
          placeholder='body'
        />
        <select name='userId' className='w-full border-normal sm:w-100'>
          <option disabled value='none'>
            users
          </option>
          {users.map(({ id, name }) => (
            <option value={id}>{name}</option>
          ))}
        </select>
      </fieldset>
      <button type='submit' className='border-gray-400 hovering'>
        Submit
      </button>
    </form>
  );
}
