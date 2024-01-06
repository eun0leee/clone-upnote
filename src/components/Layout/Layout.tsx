import { Outlet } from 'react-router-dom';

import iconHamburger from '@/assets/icon_hamburger.svg';

const Layout = () => {
  return (
    <>
      <header className="flex justify-between">
        <button type="button" className="h-5 w-4">
          <img src={iconHamburger} alt="icon hamburger" />
        </button>
        <button type="button">New Note</button>
      </header>
      <div className="flex">
        <nav className="w-52">
          <ul>
            <li>All Notes</li>
            <li>NOTEBOOKS</li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
