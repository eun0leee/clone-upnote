import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import iconAddBlue from '@/assets/icon_add_blue.svg';
import iconArrowRight from '@/assets/icon_arrow_right.svg';
import iconHamburger from '@/assets/icon_hamburger.svg';
import iconNotes from '@/assets/icon_notes.svg';
import notebooksAtom from '@/recoil/notebooks/atoms';
import Modal from '@components/Notebooks/Modal';

const Layout = () => {
  const [navToggle, setNavToggle] = useState(true);
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useRecoilState(notebooksAtom);

  const isAllNotePage = pathname.includes('/allnotes');

  const handleNavToggleBtn = () => {
    setNavToggle((prev) => !prev);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="h-full">
      <header className="flex h-11 items-center justify-between border-b border-b-gray-950 pl-3 pr-8">
        <button
          type="button"
          className="svg-container h-5 w-4"
          onClick={handleNavToggleBtn}
        >
          <img src={iconHamburger} alt="icon hamburger" />
        </button>
        <button
          type="button"
          className="h-8 rounded-md bg-blue-500 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-400"
        >
          New Note
        </button>
      </header>
      <div className="flex h-[calc(100vh-44px)]">
        {navToggle ? (
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
        ) : undefined}
        <main className={`${navToggle ? 'w-[calc(100vw-208px)]' : 'w-full'}`}>
          <Outlet />
        </main>
      </div>
      {isModalOpen ? <Modal /> : undefined}
    </div>
  );
};

export default Layout;
