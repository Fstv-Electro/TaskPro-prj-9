import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const InfoText = styled.p`
  width: 486px;
  height: 72px;
  color: rgba(255, 255, 255, 0.5);
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
  color: #bedbb0;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
`;