import { useParams } from 'react-router-dom';

const NotebooksMemoDetail = () => {
  const params = useParams();
  return (
    <div>
      NotebooksMemoDetail Page
      <h2>{params.title}</h2>
    </div>
  );
};

export default NotebooksMemoDetail;
