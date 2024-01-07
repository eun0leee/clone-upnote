import iconAddWhite from '@/assets/icon_add_gray.svg';
import NoResults from '@components/common/NoResults';

const Notebooks = () => {
  return (
    <div className="h-full">
      <header className="flex justify-between border-b border-b-gray-950 bg-gray-750 px-4 py-[7px]">
        <h1 className="text-base font-medium text-gray-300">Notebooks</h1>
        <button type="button" className="svg-container-blue mr-2 h-5 w-5">
          <img src={iconAddWhite} alt="icon add blue" />
        </button>
      </header>
      <div className="h-[calc(100%-40px)]">
        <NoResults pageName="Notebooks" />
      </div>
    </div>
  );
};

export default Notebooks;
