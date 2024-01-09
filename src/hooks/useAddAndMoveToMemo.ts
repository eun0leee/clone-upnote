import { useLocation, useNavigate } from 'react-router-dom';

import { addMemo } from '@/storage/memo';

const useAddAndMoveToMemo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, page, title] = pathname.split('/');

  const timestamp = new Date().getTime();

  let notebook: string | null = '';
  if (page === 'allnotes') {
    notebook = null;
  } else {
    notebook = title;
  }

  const moveToMemo = () => {
    addMemo({ timestamp, notebook });

    if (page === 'allnotes') {
      navigate(`/allnotes/${timestamp}`);
    } else if (page === 'notebooks' && title === undefined) {
      navigate(`/allnotes/${timestamp}`);
    } else if (page === 'notebooks' && title !== undefined) {
      navigate(`/notebooks/${title}/memo/${timestamp}`);
    }
  };

  return moveToMemo;
};

export default useAddAndMoveToMemo;
