import { getMemo } from '@/storage/memo';
import type { GetMemoResponseProps } from '@/types/memo';

const getNotebookMemo = (title: string) => {
  const memos = getMemo();
  return memos.filter((memo: GetMemoResponseProps) => memo.notebook === title);
};

export default getNotebookMemo;
