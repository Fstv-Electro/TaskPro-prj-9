import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLogin } from '../../redux/auth/selectores';

export const PrivateRout = ({ component, redirectTo }) => {
  const isLoggetIn = useSelector(selectIsLogin);

  return !isLoggetIn ? <Navigate to={redirectTo} /> : component;
};
