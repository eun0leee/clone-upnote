import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import iconDelete from '@/assets/icon_delete.svg';
import imgNotebook from '@/assets/img_notebook.png';
import { getNotebooks } from '@/storage/notebooks';
import type { NotebooksProps } from '@/types/notebooks';
import getNotebookMemo from '@/utils/getNotebookMemo';
import handleDeleteNotebook from '@/utils/handleDeleteNotebook';

const NavNotebooksList = () => {
  const [hoveredNotebook, setHoveredNotebook] = useState<string | null>(null);
  const { title } = useParams();
  const notebooks = getNotebooks();

  return (
    <ol>
      {notebooks.reverse().map((notebook: NotebooksProps) => (
        <li key={notebook.title}>
          <Link
            to={`/notebooks/${notebook.title}`}
            onMouseEnter={() => setHoveredNotebook(notebook.title)}
            onMouseLeave={() => setHoveredNotebook(null)}
            className={`flex h-10 items-center justify-between pl-9 pr-3 font-medium text-gray-300 hover:bg-gray-900 ${
              notebook.title === title ? 'bg-gray-900' : undefined
            }`}
          >
            <div className="flex items-center">
              <img src={imgNotebook} alt="notebook" className="mr-2 w-6" />
              <span className="mr-1">{notebook.title}</span>
              <span className="text-xs font-semibold text-gray-500">
                {getNotebookMemo(notebook.title).length === 0
                  ? undefined
                  : getNotebookMemo(notebook.title).length}
              </span>
            </div>
            {hoveredNotebook === notebook.title ? (
              <button
                type="button"
                onClick={(e) => handleDeleteNotebook(e, notebook.title)}
                className="flex h-8 w-8 items-center justify-center hover:bg-opacity-50"
              >
                <img src={iconDelete} alt="icon delete" className="w-3" />
              </button>
            ) : undefined}
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default NavNotebooksList;
