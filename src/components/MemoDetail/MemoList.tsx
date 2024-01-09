import { useLocation } from 'react-router-dom';

import { getMemo } from '@/storage/memo';
import type { GetMemoResponse } from '@/types/memo';
import formatTimestamp from '@/utils/formatTimestamp';
import getNotebookMemo from '@/utils/getNotebookMemo';

const MemoList = () => {
  const { pathname } = useLocation();
  const [, page, title] = pathname.split('/');
  const memos = getMemo();

  // pathname이 allnotes 이면 memos, notebooks 면 notebooksMemo
  const convertedMemos = page === 'allnotes' ? memos : getNotebookMemo(title);

  return (
    <section className="h-full w-64 border-r border-r-gray-950">
      <header className="border-b border-b-gray-950 bg-gray-800 px-4 py-[7px]">
        <h1 className="text-base font-medium text-gray-300">
          {page === 'allnotes' ? 'All Notes' : title}
        </h1>
      </header>
      <ol className="h-[calc(100vh-83px)] overflow-auto">
        {convertedMemos
          .reverse()
          .map((memo: GetMemoResponse, index: number) => (
            <li
              key={memo.createdAt}
              className={` flex flex-col gap-2 py-4 ${
                index === 0 ? 'bg-gray-900 px-4' : 'mx-4'
              } ${
                index === convertedMemos.length - 1
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
