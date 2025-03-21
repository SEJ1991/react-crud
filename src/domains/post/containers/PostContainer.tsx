import { PageFrame } from '../../../shared';

interface Props {
  id?: string;
}
export function PostContainer({ id }: Props) {
  return <PageFrame>{id}</PageFrame>;
}
