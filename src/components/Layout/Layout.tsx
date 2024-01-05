import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>헤더</header>
      <div className="flex">
        <nav>내비게이션</nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
