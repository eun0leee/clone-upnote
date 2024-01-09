import { MEMO_LOCALSTORAGE_KEY } from '@/constants/localStorageKey';
import type { AddMemoRequest } from '@/types/memo';

const LocalStorageSetMemo = (value: unknown) => {
  localStorage.setItem(MEMO_LOCALSTORAGE_KEY, JSON.stringify(value));
};

export const initMemo = () => {
  const localData = localStorage.getItem(MEMO_LOCALSTORAGE_KEY);

  if (localData === null) {
    LocalStorageSetMemo([]);
  }
};

export const getMemo = () => {
  // value 받아서 get item 처리
  // AllNotes와 NotebookDetail 에서 메모가 있으면 getMemo호출. memodetail 컴포넌트와 /allnotes/:id
  // AllNotes와 NotebookDetail 에서 메모가 없으면 noResults 컴포넌트와 /allnotes

  const localData = localStorage.getItem(MEMO_LOCALSTORAGE_KEY);
  return localData !== null ? JSON.parse(localData) : undefined;
};

export const addMemo = ({ timestamp, notebookName }: AddMemoRequest) => {
  const memos = getMemo();
  const newMemo = [
    ...memos,
    {
      title: '',
      text: '',
      createdAt: timestamp,
      updatedAt: timestamp,
      notebook: notebookName,
    },
  ];
  LocalStorageSetMemo(newMemo);

  return {
    message: 'success',
    data: newMemo,
  };
};

export const deleteMemo = () => {
  // value 받아서 set item 처리
  // memolist에서 처리
};
