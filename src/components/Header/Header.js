import { useState } from 'react';
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
  const [currentTheme, setCurrentTheme] = useState('Dark');
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const themeOptions = ['Light', 'Dark', 'Violet'];

  const handleDropdownClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };
  const handleThemeChange = e => {
    setCurrentTheme(e.target.value);
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

      <UserInfo />
    </HeaderStyled>
  );
};
