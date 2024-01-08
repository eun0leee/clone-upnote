import { deleteNotebooks } from '@/storage/notebooks';

const handleDeleteNotebook = (
  e: React.MouseEvent<HTMLButtonElement>,
  title: string,
) => {
  e.preventDefault();
  deleteNotebooks(title);
};

export default handleDeleteNotebook;
