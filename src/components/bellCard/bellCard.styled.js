import styled from '@emotion/styled';

export const BoxShadow = styled.div`
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  stroke: currentColor;
  flex-shrink: 0;
  color: ${props => props.color};
  filter: drop-shadow(0px 0px 5.5px currentColor);
`;
