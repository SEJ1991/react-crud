import { CommentType } from '../types';

interface Props {
  comments?: CommentType[];
}
export default function Comments({ comments = [] }: Props) {
  return <div></div>;
}
