import { Navigate, useParams } from 'react-router-dom';

import getNotebookMemo from '@/utils/getNotebookMemo';
import NoResults from '@components/common/NoResults';

const NotebookDetail = () => {
  const { title } = useParams();

  const notebookMemo = title ? getNotebookMemo(title) : undefined;
  const aa = notebookMemo[notebookMemo.length - 1]?.createdAt;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {notebookMemo.length === 0 ? (
        <NoResults pageName="NotebookDetail" />
      ) : (
        <Navigate to={`/notebooks/${title}/memo/${aa}`} />
      )}
    </>
  );
};

export default NotebookDetail;
