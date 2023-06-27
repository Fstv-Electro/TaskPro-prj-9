import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 197px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background: #1f1f1f;
  @media (min-width: 768px) {
    max-width: 212px;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 12px;
  font-family: 'Poppins';
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Span = styled.span`
  color: #bedbb0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  padding: 0;
  border: none;
  color: #fff;
  background: #1f1f1f;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const Image = styled.img`
  width: 54px;
  height: 78px;
  margin-bottom: 14px;
`;
export const TextButton = styled.span`
  margin-left: 8px;
  :hover {
    color: #bedbb0;
  }
`;

export const Svg = styled.svg`
  stroke: #fff;
  :hover {
    stroke: #bedbb0;
  }
`;
