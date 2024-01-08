import { Link, useParams } from 'react-router-dom';

import imgNotebook from '@/assets/img_notebook.png';
import { getNotebooks } from '@/storage/notebooks';
import type { NotebooksProps } from '@/types/notebooks';

const NavNotebooksList = () => {
  const params = useParams();
  const notebooks = getNotebooks();

  return (
    <ol>
      {notebooks.reverse().map((notebook: NotebooksProps) => (
        <li key={notebook.title}>
          <Link
            to={`/notebooks/${notebook.title}`}
            className={`flex h-10 items-center px-9 font-medium text-gray-300 hover:bg-gray-900 ${
              notebook.title === params.title ? 'bg-gray-900' : undefined
            }`}
          >
            <img src={imgNotebook} alt="notebook" className="mr-2 w-6" />
            <span>{notebook.title}</span>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default NavNotebooksList;
