import { AtomicCard } from '../../../shared';
import { UserType } from '../types';

interface Props {
  users?: UserType[];
  onClickDetail: (id: number) => () => void;
}
export default function Users({ users = [], onClickDetail }: Props) {
  return (
    <ul className='columns-2 sm:columns-3 lg:columns-5 gap-4'>
      {users.map(({ id, name, username, phone, email, company: { name: companyName } }) => (
        <li
          key={id}
          onClick={onClickDetail(id)}
          className='mb-4 break-inside-avoid cursor-pointer hovering'
        >
          <AtomicCard>
            <AtomicCard.Heading className='text-gray-500 text-md md:text-lg line-clamp-1'>
              <strong className='text-red-400'>{name}</strong> ({username})
            </AtomicCard.Heading>
            <div className='w-full'>
              <UserContent title='phone' value={phone} />
              <UserContent title='email' value={email} />
              <UserContent title='company' value={companyName} />
            </div>
          </AtomicCard>
        </li>
      ))}
    </ul>
  );
}

interface UserContentProps {
  title: string;
  value: string;
}
function UserContent({ title, value }: UserContentProps) {
  return (
    <p className='line-clamp-1'>
      <strong>{title}</strong>: &nbsp;<span>{value}</span>
    </p>
  );
}
