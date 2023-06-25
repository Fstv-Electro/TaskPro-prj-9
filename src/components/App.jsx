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

        <Route path="/home" element={<div>home</div>} />
        <Route path="/home/:boardName" element={<div>home:id</div>} />
        <Route
          path="*"
          element={
            <div>
              {/* welcome page <Link to="/auth/login"> login</Link>
              <Link to="/auth/register"> register</Link> */}
            </div>
          }
        />
      </Routes>
      <div
        style={{
          height: '100vh',
        }}
      >
        {/* React task PRO */}
      </div>
    </>
  );
};
