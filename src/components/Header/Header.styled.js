import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 1180px; 
    height: 68px;
    background: #161616;

`

export const ThemeContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 70px;
    height: auto;
    margin-right: 14px;
    color: rgba(255, 255, 255, 0.80);

}     
`

export const ThemeList = styled.ul`
    position: absolute;
    top: 14px;
    left: -12px;
    display: none;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 4px;
    margin: 0px;
    padding: 18px 44px 18px 18px;
    width: 38px;
    
    overflow: hidden;
    list-style: none;
    cursor: pointer;
    background: #161616;
    border-radius: 8px;
    z-index: 1000;
    transition: all 0.3s ease-out;

    &.active  {
      display: grid;
    }
`
export const ThemeSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-out;
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
  font-size: 14px;
  letter-spacing: -0.28px;
  border: none;
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  color: ${({ selected }) => (selected ? '#BEDBB0' : 'rgba(255, 255, 255, 0.50);')};
`;


