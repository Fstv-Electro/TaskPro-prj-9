import styled from '@emotion/styled';

export const Container = styled.div`
  width: 212px;
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 24px;
  border-radius: 8px;
  background: var(--sidebar-second-bg-color);
    
    @media (min-width: 768px) {
      max-width: 212px;
    }
`;

export const Text = styled.p`
  color: var(--bord-list-color);
  font-size: 12px;
  font-family: 'Poppins';
  line-height: 20px;
  margin-bottom: 15px;
    
    @media (min-width: 768px) {
      font-size: 14px;
    }
`;

export const Span = styled.span`
  color: var(--button-bg-color);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  padding: 0;
  border: none;
  color: currentColor;
  background: var(--sidebar-second-bg-color);
  cursor: pointer;

      :hover {
        color: var(--button-bg-color);
        svg {
          --color1: var(--button-bg-color);
        }
        
      }
    
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
  
`;

export const Svg = styled.svg`
  --color1: var(--bord-list-color);
`;
