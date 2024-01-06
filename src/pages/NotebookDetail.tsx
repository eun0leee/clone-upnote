import { useParams } from 'react-router-dom';

const NotebookDetail = () => {
  const params = useParams();
  return (
    <div>
      NotebookDetail Page
      <h2>{params.title}</h2>
    </div>
  );
};

export default NotebookDetail;
