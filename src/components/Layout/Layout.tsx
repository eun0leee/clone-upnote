import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import iconHamburger from '@/assets/icon_hamburger.svg';
import useMoveToMemo from '@/hooks/useMoveToMemo';
import notebooksAtom from '@/recoil/notebooks/atoms';
import { initMemo } from '@/storage/memo';
import { initNotebooks } from '@/storage/notebooks';
import Nav from '@components/Layout/Nav';
import Modal from '@components/Notebooks/Modal';

const Layout = () => {
  const moveToMemo = useMoveToMemo();
  const [isNavToggleOpen, setIsNavToggleOpen] = useState(true);
  const isModalOpen = useRecoilValue(notebooksAtom);

  initNotebooks();
  initMemo();

  const handleNavToggleBtn = () => {
    setIsNavToggleOpen((prev) => !prev);
  };

  const handleNewNoteBtn = () => {
    moveToMemo();
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
          onClick={handleNewNoteBtn}
          className="h-8 rounded-md bg-blue-500 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-400"
        >
          New Note
        </button>
      </header>
      <div className="flex h-[calc(100vh-44px)]">
        {isNavToggleOpen ? <Nav /> : undefined}
        <main
          className={`${
            isNavToggleOpen
              ? 'w-[calc(100vw-224px)] min-w-[calc(1400px-224px)]'
              : 'w-full'
          }`}
        >
          <Outlet />
        </main>
      </div>
      {isModalOpen ? <Modal /> : undefined}
    </div>
  );
};

export default Layout;
