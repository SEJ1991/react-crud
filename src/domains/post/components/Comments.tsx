import { CommentType } from '../types';

interface Props {
  comments?: CommentType[];
}
export default function Comments({ comments = [] }: Props) {
  return (
    <div className='flex flex-col gap-4 card'>
      <h3 className='font-semibold'>{comments.length} Comments</h3>
      <ul className='flex flex-col gap-2'>
        {comments.map(({ id, name, email, body }) => (
          <li key={id} className='border-b border-b-gray-200 pb-2'>
            <span className='text-gray-500'>
              <strong className='text-red-400'>{name} </strong>({email})
            </span>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
