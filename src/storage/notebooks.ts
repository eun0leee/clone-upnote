import { NOTEBOOKS_LOCALSTORAGE_KEY } from '@/constants/localStorageKey';

const LocalStorageSetNotebooks = (value: unknown) => {
  localStorage.setItem(NOTEBOOKS_LOCALSTORAGE_KEY, JSON.stringify(value));
};

export const initNotebooks = () => {
  const localData = localStorage.getItem(NOTEBOOKS_LOCALSTORAGE_KEY);

  if (localData === null) {
    LocalStorageSetNotebooks([]);
  }
};

export const getNotebooks = () => {
  const localData = localStorage.getItem(NOTEBOOKS_LOCALSTORAGE_KEY);
  return localData !== null ? JSON.parse(localData) : undefined;
};

export const addNotebooks = () => {
  // value 받아서 set item 처리
  // create modal 에서 추가
};

export const deleteNotebooks = () => {
  // value 받아서 set item 처리
  // nav의 notebooks, notebooks 페이지에서 삭제
};
