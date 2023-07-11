import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  height: calc(100vh - 24px);
  margin: 0;
  padding: 24px 0 0 24px;
  color: var(--bord-list-color);
  background: var(--sidebar-first-bg-color);
  left: 0;
  z-index: 100;
  width: 260px;

  // mobile

  @media (max-width: 1440px) {
    position: absolute;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    bottom: 0;
    transition: all 1s;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.64px;
`;

export const NaviUser = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  /* height: 100%; */
  width: 100%;
  /* gap:28px; */
`;

export const NavDashboards = styled.nav`
  /* margin-bottom: auto; */

  height: 300px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const NeedHelpLogOutContainer = styled.div`
  margin-top: auto;
  margin-bottom: 28px;
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  border-radius: 5px;
`;

export const Logo = styled.svg`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  --color5: var(--sidebar-bg-icon-logo);
  --color1: var(--sidebar-color-icon-logo);
`;
export const IconMenu = styled.svg`
  position: absolute;
  top: 18px;
  left: 32px;
  width: 32px;
  height: 32px;
  display: none;
  cursor: pointer;
  transition: all 1s;
  --color1: var(--first-text-color);

  &:active {
    opacity: 0;
  }

  @media (max-width: 375px) {
    left: 20px;
  }

  @media (max-width: 1440px) {
    display: block;
  }
`;
