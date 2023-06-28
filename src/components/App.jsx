import { Routes, Route } from 'react-router-dom';
import { Auth } from './pages/auth';

import { WelcomePage } from './auth/welcomePage/welcomePage';
import RegistrationView from 'components/auth/RegistrationView/RegistrationView';
import LoginView from 'components/auth/LoginView/LoginView';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegistrationView />} />
        <Route path="/login" element={<LoginView />} />

        <Route path="/auth/:id" element={<Auth></Auth>} />

        <Route
          path="/home"
          element={<PrivateRout component={<Home />} redirectTo="/welcome" />}
        />
        <Route
          path="/home/:boardName"
          element={
            <PrivateRout component={<div>home/id</div>} redirectTo="/welcome" />
          }
        />
        <Route
          path="*"
          element={
            <div>
              {/* welcome page <Link to="/auth/login"> login</Link>
              <Link to="/auth/register"> register</Link> */}
            </div>
          }
        />
      </Routes>{' '}
      */}
      <AddColumn />
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
