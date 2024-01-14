import { useState } from 'react';
import { Link } from 'react-router-dom';

import iconDelete from '@/assets/icon_delete.svg';
import imgNotebook from '@/assets/img_notebook.png';
import { getNotebooks } from '@/storage/notebooks';
import type { NotebooksProps } from '@/types/notebooks';
import handleDeleteNotebook from '@/utils/handleDeleteNotebook';

const NotebooksGallery = () => {
  const [hoveredNotebook, setHoveredNotebook] = useState<string | null>(null);
  const notebooks = getNotebooks();

  return (
    <ol className="flex w-full gap-10 overflow-hidden px-7 py-4">
      {notebooks.reverse().map((notebook: NotebooksProps) => (
        <Link
          to={`/notebooks/${notebook.title}`}
          key={notebook.title}
          className="relative"
          onMouseEnter={() => setHoveredNotebook(notebook.title)}
          onMouseLeave={() => setHoveredNotebook(null)}
        >
          <img src={imgNotebook} alt="notebook" className="min-w-28" />
          <span className="absolute bottom-0 h-10 w-full truncate rounded-b-[10px] bg-black bg-opacity-30 px-2 py-2 font-semibold text-gray-300">
            {notebook.title}
          </span>
          {hoveredNotebook === notebook.title ? (
            <button
              type="button"
              onClick={(e) => handleDeleteNotebook(e, notebook.title)}
              className="absolute right-2 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-30 hover:bg-opacity-50"
            >
              <img src={iconDelete} alt="icon delete" className="w-3" />
            </button>
          ) : undefined}
        </Link>
      ))}
    </ol>
  );
};

export default NotebooksGallery;
