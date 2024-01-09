import { useParams } from 'react-router-dom';

const MemoEditor = () => {
  const { id } = useParams();
  return <section className="p-10">MemoEditor {id}</section>;
};

export default MemoEditor;
