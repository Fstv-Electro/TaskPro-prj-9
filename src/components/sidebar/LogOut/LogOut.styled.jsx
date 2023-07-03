import styled from '@emotion/styled';

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  transform: scale(1);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(1.1);
  }

  svg {
    --color2: var(--sidebar-bg-icon-logout-color);
  }
`;

export const LogOutText = styled.span`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  margin-left: 14px;
  color: var(--bord-list-color);
`;
