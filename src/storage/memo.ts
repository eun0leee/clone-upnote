import { MEMO_LOCALSTORAGE_KEY } from '@/constants/localStorageKey';

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

export const addMemo = () => {
  // value 받아서 set item 처리
  // header의 버튼과, noresult가 allnotes 또는 notebookdetail 일 때 추가
};

export const deleteMemo = () => {
  // value 받아서 set item 처리
  // memolist에서 처리
};
