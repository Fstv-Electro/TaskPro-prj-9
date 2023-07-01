import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: calc(100vh - 24px);
  align-items: center;
  position: relative;
  margin: 0;
  padding: 24px 0 0 24px;
  color: #fff;
  background: #121212;
  z-index: 100;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-family: Poppins;
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
  background-color: #1f1f1f;
  border-radius: 5px;
`;

export const Logo = styled.svg`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  fill: #1f1f1f;
  color: #121212;
`;
