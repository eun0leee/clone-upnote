import { useLocation } from 'react-router-dom';

import { getMemo } from '@/storage/memo';
import type { GetMemoResponse } from '@/types/memo';
import formatTimestamp from '@/utils/formatTimestamp';

const MemoList = () => {
  const { pathname } = useLocation();
  const [, page, title] = pathname.split('/');
  const memos = getMemo();

  let notebookName = '';
  if (page === 'allnotes') {
    notebookName = 'All Notes';
  } else {
    notebookName = title;
  }

  return (
    <section className="h-full w-64 border-r border-r-gray-950">
      <header className="border-b border-b-gray-950 bg-gray-800 px-4 py-[7px]">
        <h1 className="text-base font-medium text-gray-300">{notebookName}</h1>
      </header>
      <ol className="h-[calc(100vh-83px)] overflow-auto">
        {memos.reverse().map((memo: GetMemoResponse, index: number) => (
          <li
            key={memo.createdAt}
            className={` flex flex-col gap-2 py-4 ${
              index === 0 ? 'bg-gray-900 px-4' : 'mx-4'
            } ${
              index === memos.length - 1
                ? undefined
                : 'border-b border-b-gray-700'
            }`}
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
          </li>
        ))}
      </ol>
    </section>
  );
};

export default MemoList;
