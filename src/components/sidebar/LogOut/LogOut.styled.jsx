import styled from '@emotion/styled';

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

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
