import { useSetRecoilState } from 'recoil';

import iconAddWhite from '@/assets/icon_add_gray.svg';
import notebooksAtom from '@/recoil/notebooks/atoms';
import { getNotebooks } from '@/storage/notebooks';
import NoResults from '@components/common/NoResults';
import NotebooksGallery from '@components/Notebooks/NotebooksGallery';

const Notebooks = () => {
  const setIsModalOpen = useSetRecoilState(notebooksAtom);
  const notebooks = getNotebooks();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="h-full">
      <header className="flex justify-between border-b border-b-gray-950 bg-gray-750 px-4 py-[7px]">
        <div className="flex items-center gap-1 text-base font-medium">
          <h1 className=" text-gray-300">Notebooks</h1>
          <span className="text-gray-500">({notebooks.length})</span>
        </div>
        <button
          type="button"
          className="svg-container-blue mr-2 h-5 w-5"
          onClick={handleOpenModal}
        >
          <img src={iconAddWhite} alt="icon add blue" />
        </button>
      </header>
      <div className="h-[calc(100%-40px)]">
        {notebooks.length === 0 ? (
          <NoResults pageName="Notebooks" />
        ) : (
          <NotebooksGallery />
        )}
      </div>
    </section>
  );
};

export default Notebooks;
