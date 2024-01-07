import { NO_RESULTS } from '@/constants/common';

const NoResults = ({ pageName }: { pageName: string }) => {
  const findNoResultsConstant = NO_RESULTS.find(
    (noResult) => noResult.pageName === pageName,
  );
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
      <button type="button" className=" text-blue-500">
        {findNoResultsConstant?.buttonWord}
      </button>
    </div>
  );
};

export default NoResults;
