import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLogin,
  selectIsRefreshing,
} from 'redux/auth/selectores';

export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLogin,
    isRefreshing,
    user,
  };
};