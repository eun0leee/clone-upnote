import { useLocation, useNavigate } from 'react-router-dom';

const useMoveToMemo = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, page, notebook] = pathname.split('/');

  const timestamp = new Date().getTime();

  const moveToMemo = () => {
    if (page === 'allnotes') {
      navigate(`/allnotes/${timestamp}`);
    } else if (page === 'notebooks' && notebook === undefined) {
      navigate(`/allnotes/${timestamp}`);
    } else if (page === 'notebooks' && notebook !== undefined) {
      navigate(`/notebooks/${notebook}/memo/${timestamp}`);
    }
  };

  return moveToMemo;
};

export default useMoveToMemo;
