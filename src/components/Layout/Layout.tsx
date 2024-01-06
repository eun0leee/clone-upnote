import { Outlet } from 'react-router-dom';

import iconAddBlue from '@/assets/icon_add_blue.svg';
import iconArrowRight from '@/assets/icon_arrow_right.svg';
import iconHamburger from '@/assets/icon_hamburger.svg';
import iconNotes from '@/assets/icon_notes.svg';

const Layout = () => {
  return (
    <div className="h-screen">
      <header className="flex h-11 items-center justify-between border-b border-b-gray-950 pl-3 pr-8">
        <button type="button" className="svg-container h-5 w-4 ">
          <img src={iconHamburger} alt="icon hamburger" />
        </button>
        <button
          type="button"
          className="h-8 rounded-md bg-blue px-3 py-1 text-sm font-semibold text-white hover:bg-[#5B7FCD]"
        >
          New Note
        </button>
      </header>
      <div className="flex h-[calc(100vh-44px)]">
        <nav className="w-52 border-r border-r-gray-950">
          <ol>
            <li className="mb-2 flex items-center px-3 py-2 hover:bg-gray-900">
              <button type="button" className="mr-2 h-5 w-4">
                <img src={iconNotes} alt="icon notes" />
              </button>
              <span className="cursor-pointer font-semibold text-gray-300">
                All Notes
              </span>
            </li>
            <li className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center">
                <button type="button" className="svg-container mr-2 h-5 w-4">
                  <img src={iconArrowRight} alt="icon arrow right" />
                </button>
                <span className="cursor-pointer font-semibold text-blue hover:text-[#5B7FCD]">
                  NOTEBOOKS
                </span>
              </div>
              <button type="button" className="mr-2 h-5 w-5">
                <img src={iconAddBlue} alt="icon add blue" />
              </button>
            </li>
          </ol>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
