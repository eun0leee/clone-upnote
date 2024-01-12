import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import iconAddBlue from '@/assets/icon_add_blue.svg';
import iconArrowDown from '@/assets/icon_arrow_down.svg';
import iconArrowRight from '@/assets/icon_arrow_right.svg';
import iconNotes from '@/assets/icon_notes.svg';
import notebooksAtom from '@/recoil/notebooks/atoms';
import { getMemo } from '@/storage/memo';
import NavNotebooksList from '@components/Layout/NavNotebooksList';

const Nav = () => {
  const { pathname } = useLocation();
  const setIsModalOpen = useSetRecoilState(notebooksAtom);
  const [isNotebooksToggleOpen, setIsNotebooksToggleOpen] = useState(true);
  const memos = getMemo();

  const isAllNotePage = pathname.includes('/allnotes');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleNotebooksToggleBtn = () => {
    setIsNotebooksToggleOpen((prev) => !prev);
  };

  return (
    <nav className="color-scroll h-[calc(100vh-44px)] w-56 overflow-auto border-r border-r-gray-950">
      <ol>
        <li className="mb-2">
          <Link
            type="button"
            className={`flex h-[39px] w-full cursor-pointer items-center px-3  py-2 hover:bg-gray-900 ${
              isAllNotePage ? 'bg-gray-900' : undefined
            }`}
            to="/allnotes"
          >
            <span className="mr-2 flex h-5 w-4 items-center">
              <img src={iconNotes} alt="icon notes" />
            </span>
            <span className="mr-1 font-semibold text-gray-300">All Notes</span>
            <span className="text-xs font-semibold text-gray-500">
              {memos.length}
            </span>
          </Link>
        </li>
        <li>
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleNotebooksToggleBtn}
                className="svg-container mr-2 h-5 w-4"
              >
                {isNotebooksToggleOpen ? (
                  <img src={iconArrowDown} alt="icon arrow right" />
                ) : (
                  <img src={iconArrowRight} alt="icon arrow right" />
                )}
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
          </div>
          {isNotebooksToggleOpen ? <NavNotebooksList /> : undefined}
        </li>
      </ol>
    </nav>
  );
};

export default Nav;
