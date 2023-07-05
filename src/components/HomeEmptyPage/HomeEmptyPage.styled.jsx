import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: calc(100vh - 72px);
  background-color: var(--main-bg-color);

  @media (max-width: 768px) {
    height: calc(100vh - 64px);
  }
`;

export const InfoText = styled.p`
  width: 486px;
  height: 72px;
  color: var(--last-text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
    width: 100%;
    max-height: 80px;
  }
`;

export const AccentText = styled.span`
  color: var(--button-bg-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
`;
