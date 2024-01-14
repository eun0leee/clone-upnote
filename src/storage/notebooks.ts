import { NOTEBOOKS_LOCALSTORAGE_KEY } from '@/constants/localStorageKey';
import type { NotebooksProps } from '@/types/notebooks';

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

export const addNotebooks = (value: string) => {
  const notebooks = getNotebooks();
  const newNotebooks = [{ title: value }, ...notebooks];

  const findValueDuplicated = notebooks.find(
    (notebook: NotebooksProps) => notebook.title === value,
  );

  if (findValueDuplicated === undefined) {
    LocalStorageSetNotebooks(newNotebooks);

    return {
      message: 'success',
      data: newNotebooks,
    };
  }

  return {
    message: 'fail',
    data: undefined,
  };
};

export const deleteNotebooks = (title: string) => {
  const notebooks = getNotebooks();
  const newNotebooks = notebooks.filter(
    (notebook: NotebooksProps) => notebook.title !== title,
  );

  LocalStorageSetNotebooks(newNotebooks);

  return {
    message: 'success',
    data: newNotebooks,
  };
};
