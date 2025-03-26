import { useForm } from 'react-hook-form';
import { UserType } from '../../user/types';
import { PostFormType } from '../types';

interface Props {
  users?: UserType[];
  defaultValues?: PostFormType;
  onSubmit: (data: PostFormType) => void;
}
export default function PostForm({ users = [], defaultValues, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormType>({ defaultValues });

  return (
    <form
      className='size-full card mb-4 flex-center flex-col gap-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className='size-full flex flex-col gap-4'>
        <legend className='text-2xl mb-4'>Post</legend>
        <input
          {...register('title', { required: true })}
          className={`w-full sm:w-100 ${GET_BORDER(!!errors.title)}`}
          placeholder='title'
        />
        <textarea
          {...register('body', { required: true })}
          className={`w-full sm:w-125 md:w-175 ${GET_BORDER(!!errors.body)}`}
          placeholder='body'
        />
        <select
          {...register('userId', { validate: value => Number(value) !== 0 })}
          className={`w-full sm:w-100 ${GET_BORDER(!!errors.userId)}`}
        >
          <option disabled value='0'>
            users
          </option>
          {users.map(({ id, name }) => (
            <option key={id} value={id}>
              {name} ({id})
            </option>
          ))}
        </select>
      </fieldset>
      <button type='submit' className='border-gray-400 hovering'>
        Submit
      </button>
    </form>
  );
}

function GET_BORDER(isRequired: boolean): string {
  return isRequired ? 'border-required' : 'border-normal';
}
