import { MEMO_LOCALSTORAGE_KEY } from '@/constants/localStorageKey';
import type { AddMemoRequestProps, GetMemoResponseProps } from '@/types/memo';

const LocalStorageSetMemos = (value: unknown) => {
  localStorage.setItem(MEMO_LOCALSTORAGE_KEY, JSON.stringify(value));
};

export const initMemo = () => {
  const localData = localStorage.getItem(MEMO_LOCALSTORAGE_KEY);

  if (localData === null) {
    LocalStorageSetMemos([]);
  }
};

export const getMemo = () => {
  // value 받아서 get item 처리
  // AllNotes와 NotebookDetail 에서 메모가 있으면 getMemo호출. memodetail 컴포넌트와 /allnotes/:id
  // AllNotes와 NotebookDetail 에서 메모가 없으면 noResults 컴포넌트와 /allnotes

  const localData = localStorage.getItem(MEMO_LOCALSTORAGE_KEY);
  return localData !== null ? JSON.parse(localData) : undefined;
};

export const addMemo = ({ timestamp, notebook }: AddMemoRequestProps) => {
  const memos = getMemo();
  const newMemos = [
    ...memos,
    {
      title: '',
      text: '',
      createdAt: timestamp,
      updatedAt: timestamp,
      notebook,
      content: '',
    },
  ];
  LocalStorageSetMemos(newMemos);

  return {
    message: 'success',
    data: newMemos,
  };
};

export const deleteMemo = (createdAt: number) => {
  const memos = getMemo();
  const newMemos = memos.filter(
    (memo: GetMemoResponseProps) => memo.createdAt !== createdAt,
  );

  LocalStorageSetMemos(newMemos);

  return {
    message: 'success',
    data: newMemos,
  };
};

export const typeMemo = (content: string | null, id: number) => {
  const memos = getMemo();

  const [title = '', text = ''] = content?.split(`\n`) || [];

  const newMemos = memos.map((memo: GetMemoResponseProps) => {
    if (memo.createdAt === id) {
      return {
        ...memo,
        title,
        text,
        updatedAt: new Date().getTime(),
        content,
      };
    }
    return memo;
  });

  LocalStorageSetMemos(newMemos);

  return {
    message: 'success',
    data: newMemos,
  };
};
