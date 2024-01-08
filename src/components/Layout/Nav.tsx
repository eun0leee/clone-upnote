import { Link, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import iconAddBlue from '@/assets/icon_add_blue.svg';
import iconArrowRight from '@/assets/icon_arrow_right.svg';
import iconNotes from '@/assets/icon_notes.svg';
import notebooksAtom from '@/recoil/notebooks/atoms';

const Nav = () => {
  const { pathname } = useLocation();
  const setIsModalOpen = useSetRecoilState(notebooksAtom);

  const isAllNotePage = pathname.includes('/allnotes');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <nav className="w-56 border-r border-r-gray-950">
      <ol>
        <li className="mb-2">
          <Link
            type="button"
            className={`flex w-full cursor-pointer items-center px-3  py-2 hover:bg-gray-900 ${
              isAllNotePage ? 'bg-gray-900' : undefined
            }`}
            to="/allnotes"
          >
            <span className="mr-2 flex h-5 w-4 items-center">
              <img src={iconNotes} alt="icon notes" />
            </span>
            <span className="font-semibold text-gray-300">All Notes</span>
          </Link>
        </li>
        <li className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center">
            <button type="button" className="svg-container mr-2 h-5 w-4">
              <img src={iconArrowRight} alt="icon arrow right" />
            </button>
            <Link
              type="button"
              className="cursor-pointer font-semibold text-blue-500 hover:text-blue-400"
              to="/notebooks"
            >
              NOTEBOOKS
            </Link>
          </div>
          <button
            type="button"
            className="mr-2 h-5 w-5"
            onClick={handleOpenModal}
          >
            <img src={iconAddBlue} alt="icon add blue" />
          </button>
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
