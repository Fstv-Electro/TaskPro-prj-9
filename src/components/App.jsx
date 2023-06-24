import { Routes, Route, Link } from 'react-router-dom';
import { Auth } from './pages/auth';
// import { Sidebar } from './Sidebar/Sidebar';

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/welcome"
          element={
            <div>
              welcome page <Link to="/auth/login"> login</Link>
              <Link to="/auth/register"> register</Link>
            </div>
          }
        />
        <Route path="/auth/:id" element={<Auth></Auth>} />

        <Route path="/home" element={<div>home</div>} />
        <Route path="/home/:boardName" element={<div>home:id</div>} />
        <Route
          path="*"
          element={
            <div>
              welcome page <Link to="/auth/login"> login</Link>
              <Link to="/auth/register"> register</Link>
            </div>
          }
        />
      </Routes>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React task PRO
      </div>
    </>
  );
};
