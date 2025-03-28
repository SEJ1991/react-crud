import { useForm } from 'react-hook-form';
import { UserType } from '../../user/types';
import { PostFormType } from '../types';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  users?: UserType[];
  defaultValues?: PostFormType;
  needDirtyFileds?: boolean;
  isPending: boolean;
  onClickBackBtn: () => void;
  onSubmit: (data: PostFormType) => void;
}
export default function PostForm({
  users = [],
  defaultValues,
  needDirtyFileds = false,
  isPending,
  onClickBackBtn,
  onSubmit,
}: Props) {
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors, dirtyFields },
  } = useForm<PostFormType>({ defaultValues });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!needDirtyFileds) {
      formSubmit(onSubmit)(e);
      return;
    }

    formSubmit(data => {
      const newData: PostFormType = {};

      Object.keys(dirtyFields).forEach(field => {
        const key = field as keyof PostFormType;
        newData[key] = data[key] as keyof PostFormType;
      });

      onSubmit(newData);
    })(e);
  };

  return (
    <form className='size-full card mb-4 flex-center flex-col gap-4' onSubmit={handleSubmit}>
      <fieldset className='size-full flex flex-col gap-4'>
        <legend className='text-2xl mb-4'>Post</legend>
        <FormRow errMsg={errors.title?.message}>
          <input
            {...register('title', { required: 'Title is required' })}
            className='w-full sm:w-100 border-normal'
            placeholder='title'
          />
        </FormRow>
        <FormRow errMsg={errors.body?.message}>
          <textarea
            {...register('body', { required: 'Body is required' })}
            className='w-full h-50 sm:w-125 md:w-175 border-normal'
            placeholder='body'
          />
        </FormRow>
        <FormRow errMsg={errors.userId?.message}>
          <select
            {...register('userId', {
              validate: value => Number(value) !== 0 || 'User is required',
            })}
            className='w-full sm:w-100 border-normal'
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
        </FormRow>
      </fieldset>
      <div className='flex gap-2'>
        <button
          type='button'
          className='border-gray-400 hovering'
          onClick={onClickBackBtn}
          disabled={isPending}
        >
          Back
        </button>
        <button
          type='submit'
          className='bg-red-400 border-0 text-white hovering'
          disabled={isPending}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

interface FormRowProps extends ComponentPropsWithoutRef<'div'> {
  errMsg?: string;
}
function FormRow({ errMsg, ...props }: FormRowProps) {
  return (
    <div {...props} className={twMerge('flex flex-col gap-1', props.className)}>
      {props.children}
      {errMsg && <span className='text-red-400 animate-pulse'>{errMsg} ⤴️</span>}
    </div>
  );
}
