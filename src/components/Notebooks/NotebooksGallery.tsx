import { Link } from 'react-router-dom';

import imgNotebook from '@/assets/img_notebook.png';
import { getNotebooks } from '@/storage/notebooks';
import type { NotebooksProps } from '@/types/notebooks';

const NotebooksGallery = () => {
  const notebooks = getNotebooks();
  return (
    <ol className="flex w-full gap-10 overflow-hidden px-7 py-4">
      {notebooks.reverse().map((notebook: NotebooksProps) => (
        <Link
          to={`/notebooks/${notebook.title}`}
          key={notebook.title}
          className="relative"
        >
          <img src={imgNotebook} alt="notebook" className=" min-w-28" />
          <span className="absolute bottom-0 flex h-10 w-full items-center rounded-b-xl bg-black bg-opacity-30 px-2 font-semibold text-gray-300">
            {notebook.title}
          </span>
        </Link>
      ))}
    </ol>
  );
};

export default NotebooksGallery;
