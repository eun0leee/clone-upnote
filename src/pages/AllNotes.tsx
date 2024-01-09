import { Navigate } from 'react-router-dom';

import { getMemo } from '@/storage/memo';
import NoResults from '@components/common/NoResults';

const AllNotes = () => {
  const memos = getMemo();
  const firstMemoCreatedAt = memos[memos.length - 1]?.createdAt;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {memos.length === 0 ? (
        <NoResults pageName="AllNotes" />
      ) : (
        <Navigate to={`/allnotes/${firstMemoCreatedAt}`} />
      )}
    </>
  );
};

export default AllNotes;
