import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogOutButton, LogOutText } from './LogOut.styled';
import sprite from '../../../images/symbol-defs.svg';

export const LogOut = () => {
  const dispatch = useDispatch();
  return (
    <LogOutButton onClick={() => {}}>
      <svg
        aria-label="question with round"
        width="20px"
        height="20px"
        fill="inherit"
      >
        <use href={sprite + '#icon-login'}></use>
      </svg>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        <LogOutText>Log out</LogOutText>
      </LogOutButton>
    </LogOutButton>
  );
};
