import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 260px;
  height: 100%;
  text-decoration: none;

  &.active {
    background-color: var(--sidebar-active-bg-color);
    outline: none;
    width: calc(100% + 24px);
    padding-left: 24px;
    margin-left: -24px;

      @media (max-width: 768px) {
        width: calc(100% + 14px);
        padding-left: 14px;
        margin-left: -14px;
      }
    &:after {
      content: '';
      display: flex;
      position: absolute;
      right: 0;
      border-radius: 4px 0px 0px 4px;
      background: var(--sidebar-bg-icon-logout-color);
      width: 4px;
      height: 61px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 61px;
  width: 100%;
  margin-bottom: 4px;

`;

export const WrapperProjectOffice = styled.button`
  display: flex;
  align-items: center;
  color: var(--bord-list-color);
  border: none;
  background: none;
  cursor: pointer;
`;

export const Project = styled.p`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 8px;
`;

export const WrapperProjectIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;

export const IconEdit = styled.svg`
  width: 16px;
  height: 16px;
  color: rgba(255, 255, 255, 0.5);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: blue;
  }
`;

export const IconDelete = styled.svg`
  width: 16px;
  height: 16px;
  color: rgba(255, 255, 255, 0.5);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: tomato;
  }
`;
