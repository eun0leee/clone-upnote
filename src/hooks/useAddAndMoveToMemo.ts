import { useLocation, useNavigate } from 'react-router-dom';

import { addMemo } from '@/storage/memo';

const useAddAndMoveToMemo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, page, title] = pathname.split('/');

  const timestamp = new Date().getTime();

  let notebook: string | null = '';
  if (page === 'notebooks') {
    notebook = title;
  } else {
    notebook = null;
  }

  const moveToMemo = () => {
    addMemo({ timestamp, notebook });

    if (page === 'notebooks' && title !== undefined) {
      navigate(`/notebooks/${title}/memo/${timestamp}`);
    } else {
      navigate(`/allnotes/${timestamp}`);
    }
  };

  return moveToMemo;
};

export default useAddAndMoveToMemo;
