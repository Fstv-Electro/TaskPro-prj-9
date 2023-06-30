import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Auth } from '../pages/auth';
import { WelcomePage } from './auth/welcomePage/welcomePage';
import { RestrictedRoute } from './routs/restrictedRoute';
import { PrivateRout } from './routs/privateRout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
// import RegistrationView from './auth/RegistrationView/RegistrationView';
// import LoginView from './auth/LoginView/LoginView';
import GlobalStyles from './GlobalStyles';

import { useEffect, lazy } from 'react';

const Home = lazy(() => import('../pages/homePage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute component={<WelcomePage />} redirectTo="/home" />
          }
        />

        <Route
          path="/auth/:id"
          element={<RestrictedRoute component={<Auth />} redirectTo="/home" />}
        />

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
            <RestrictedRoute component={<WelcomePage />} redirectTo="/home" />
          }
        />
      </Routes>
      <GlobalStyles />
    </>
  );
};
