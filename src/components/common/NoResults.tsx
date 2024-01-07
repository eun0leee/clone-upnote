import { useSetRecoilState } from 'recoil';

import { NO_RESULTS } from '@/constants/common';
import notebooksAtom from '@/recoil/notebooks/atoms';

const NoResults = ({ pageName }: { pageName: string }) => {
  const setIsModalOpen = useSetRecoilState(notebooksAtom);
  const findNoResultsConstant = NO_RESULTS.find(
    (noResult) => noResult.pageName === pageName,
  );

  const handleBtn = () => {
    if (pageName === 'Notebooks') {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex h-full min-w-[700px] flex-col items-center justify-center font-semibold">
      <img
        src={findNoResultsConstant?.imgUrl}
        alt={findNoResultsConstant?.imgAlt}
        className="mb-5 w-20"
      />
      <p className="mb-3 text-gray-400">
        {findNoResultsConstant?.guidePhrases}
      </p>
      <button type="button" className=" text-blue-500" onClick={handleBtn}>
        {findNoResultsConstant?.buttonWord}
      </button>
    </div>
  );
};

export default NoResults;
