import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%; 
    background: var(--heder-bg-color);
    padding: 18px 24px;
    color: var(--first-text-color);

      @media (max-width: 1180px) {
        padding: 18px 32px;
      }
      @media (max-width: 768px) {
        padding: 14px 20px;
      }

      

`

export const ThemeContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 70px;
    height: auto;
    margin-right: 14px;
}     
`

export const ThemeList = styled.ul`
    position: absolute;
    top: 26px;
    left: -12px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 4px;
    margin: 0px;
    max-height: 0px;
    padding: 0 44px 0 18px;
    
    overflow: hidden;
    list-style: none;
    cursor: pointer;
    background: var(--heder-bg-color);
    border-radius: 8px;
    transition: all 0.3s ease-out;
    transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;

      &.active  {
        max-height: 107px;
        padding: 18px 44px 18px 18px;
      }
  `
export const ThemeSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px 1px;
  opacity: 0.8;

  --color1: currentColor;

  &:hover{
    text-shadow: 0 1px 4px var(--button-bg-color);
    transform: scale(1.1);
  }
`

export const P = styled.p`
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    margin-right: 4px;
`

export const Item = styled.li`
    
`;

export const ItemBtn = styled.button`
  height: 21px;
  margin: 0;
  padding: 0;
  text-align: left;
  text-transform: capitalize;
  font-size: 14px;
  letter-spacing: -0.28px;
  border: none;
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  color: ${({ selected }) => (selected ? 'var(--button-bg-color)' : 'var(--text-theme-color)')};
  transition: all 0.3s ease-out;
   
    &:hover{
      text-shadow:${({ disabled }) => (!disabled ? '0 1px 4px var(--button-bg-color)' : '')};
      transform: ${({ disabled }) => (!disabled ? 'scale(1.1)' : 'scale(1)')};
      
    }
`;


