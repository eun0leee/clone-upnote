import { getMemo } from '@/storage/memo';
import type { GetMemoResponse } from '@/types/memo';

const getNotebookMemo = (title: string) => {
  const memos = getMemo();
  return memos.filter((memo: GetMemoResponse) => memo.notebook === title);
};

export default getNotebookMemo;
