import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogOutButton, LogOutText } from './LogOut.styled';
import sprite from '../../../images/symbol-defs.svg';

export const LogOut = () => {
  const dispatch = useDispatch();
  return (
    <LogOutButton type="button" onClick={() => dispatch(logOut())}>
      <svg
        aria-label="question with round"
        width="24px"
        height="24px"
        fill="inherit"
      >
        <use href={sprite + '#icon-login'}></use>
      </svg>
      <LogOutText>Log out</LogOutText>
    </LogOutButton>
  );
};
