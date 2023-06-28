import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectores';
import {
  HeaderStyled,
  ThemeContainer,
  ThemeList,
  P,
  ThemeSelect,
  Item,
  ItemBtn,
} from './Header.styled';
import { UserInfo } from './UserInfo/UserInfo';
import sprite from '../../images/symbol-defs.svg';

export const Header = () => {
  const dispatch = useDispatch();
  const {avatarURL, name, theme} = useSelector(selectUser)
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const themeOptions = ['light', 'dark', 'violet'];

  const handleDropdownClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };
  const handleThemeChange = e => {
    setCurrentTheme(e.target.value);
    dispatch(changeTheme({theme: e.target.value}));
  };

  return (
    
    <HeaderStyled>
      <ThemeContainer>
        <ThemeSelect onClick={handleDropdownClick}>
          <P> Theme </P>
          <svg aria-label="question with round" width="16px" height="16px">
            <use href={sprite + '#icon-chevron-down'}></use>
          </svg>
        </ThemeSelect>
        <ThemeList className={isDropdownActive ? 'active' : ''}>
          {themeOptions.map(theme => (
            <Item key={theme}>
              <ItemBtn
                selected={currentTheme === theme}
                disabled={currentTheme === theme}
                value={theme}
                onClick={handleThemeChange}
              >
                {theme}
              </ItemBtn>
            </Item>
          ))}
        </ThemeList>
      </ThemeContainer>

      <UserInfo  name={name} avatarURL={avatarURL}/>
    </HeaderStyled>
  );
};
