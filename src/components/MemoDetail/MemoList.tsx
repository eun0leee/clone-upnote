import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import iconDelete from '@/assets/icon_delete.svg';
import { deleteMemo, getMemo } from '@/storage/memo';
import type { GetMemoResponse } from '@/types/memo';
import formatTimestamp from '@/utils/formatTimestamp';
import getNotebookMemo from '@/utils/getNotebookMemo';

const MemoList = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [hoveredMemo, setHoveredMemo] = useState<number | null>(null);
  const [, page, title] = pathname.split('/');
  const memos = getMemo();

  // pathname이 allnotes 이면 memos, notebooks 면 notebooksMemo
  const convertedMemos = page === 'allnotes' ? memos : getNotebookMemo(title);

  const handleDeleteMemo = (
    e: React.MouseEvent<HTMLButtonElement>,
    memoCreatedAt: number,
  ) => {
    e.preventDefault();
    deleteMemo(memoCreatedAt);
  };

  return (
    <section className="h-full w-64 border-r border-r-gray-950">
      <header className="border-b border-b-gray-950 bg-gray-800 px-4 py-[7px]">
        <h1 className="text-base font-medium text-gray-300">
          {page === 'allnotes' ? 'All Notes' : title}
        </h1>
      </header>
      <ol className="h-[calc(100vh-83px)] overflow-auto">
        {convertedMemos.reverse().map((memo: GetMemoResponse) => (
          <li
            key={memo.createdAt}
            className={`hover:bg-gray-900 ${
              Number(id) === memo.createdAt ? 'bg-gray-900' : undefined
            }`}
          >
            <Link
              to={
                page === 'allnotes'
                  ? `/allnotes/${memo.createdAt}`
                  : `/notebooks/${title}/memo/${memo.createdAt}`
              }
              onMouseEnter={() => setHoveredMemo(memo.createdAt)}
              onMouseLeave={() => setHoveredMemo(null)}
              className={`relative mx-4 flex flex-col gap-2 border-b border-b-gray-700 py-4 `}
            >
              <h2 className="text-sm font-medium text-gray-300">
                {memo.title === '' ? 'New Note' : memo.title}
              </h2>
              <p className="font-normal text-gray-400">
                {memo.text === '' ? 'No additional text' : memo.text}
              </p>
              <span className="text-xs text-gray-500">
                {formatTimestamp(memo.updatedAt)}
              </span>
              {hoveredMemo === memo.createdAt ? (
                <button
                  type="button"
                  onClick={(e) => handleDeleteMemo(e, memo.createdAt)}
                  className="absolute right-0 top-3 h-8 w-8 items-center justify-center"
                >
                  <img src={iconDelete} alt="icon delete" className="w-3" />
                </button>
              ) : undefined}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default MemoList;
