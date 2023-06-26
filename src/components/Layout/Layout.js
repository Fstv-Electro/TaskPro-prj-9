import { Outlet } from 'react-router-dom';
// import { AppBar } 
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      {/* <AppBar /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};