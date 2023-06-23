import { LogOutButton, LogOutText } from './LogOut.styled';
import sprite from '../../../images/symbol-defs.svg';

export const LogOut = () => {
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
      <LogOutText>Log out </LogOutText>
    </LogOutButton>
  );
};
