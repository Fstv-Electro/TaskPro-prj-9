import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectores';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLogin);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
