import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar';
// import ProjectsNav from '../components/ProjectsNav';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
