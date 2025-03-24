import { AtomicCard } from '../../../shared';
import { UserType } from '../types';

interface Props {
  user: UserType;
  onClickBackBtn: () => void;
}
export default function User({
  user: {
    name,
    username,
    phone,
    email,
    address: { city, zipcode },
    company: { name: companyName },
    website,
  },
  onClickBackBtn,
}: Props) {
  return (
    <AtomicCard>
      <button
        className='transition-colors duration-500 ease-in-out hover:text-red-400'
        onClick={onClickBackBtn}
      >
        Back to list
      </button>
      <AtomicCard.Heading className='text-gray-500'>
        <strong className='text-red-400'>{name}</strong> ({username})
      </AtomicCard.Heading>
      <dl>
        <UserContent title='phone' value={phone} />
        <UserContent title='email' value={email} />
        <UserContent title='address' value={`${city} (${zipcode})`} />
        <UserContent title='company' value={companyName} />
        <UserContent title='website' value={website} />
      </dl>
    </AtomicCard>
  );
}

interface UserContentProps {
  title: string;
  value: string;
}
function UserContent({ title, value }: UserContentProps) {
  return (
    <div className='flex'>
      <dt className='font-semibold'>{title}</dt>
      <dd>: {value}</dd>
    </div>
  );
}
