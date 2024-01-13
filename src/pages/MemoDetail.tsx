import MemoEditor from '@components/MemoDetail/MemoEditor';
import MemoList from '@components/MemoDetail/MemoList';

const MemoDetail = () => {
  return (
    <div className="flex h-full w-screen bg-gray-930">
      <MemoList />
      <MemoEditor />
    </div>
  );
};

export default MemoDetail;
