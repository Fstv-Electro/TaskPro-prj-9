import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 14px 24px;
  background: var(--main-heder-bg-color);
  
    // @media (min-width: 1280px) {
    //     height: 48px;
    // };
    // @media (min-width: 768px) {
    //     height: 80px;
    // };
    // @media (min-width: 375px) {
    //     height: 134px;
    // };
    // @media (max-width: 374px) {
    //     max-height: 134px;
    // };
`;

export const TitleDashBoard = styled.p`    
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.36px;
    margin: 0;
`;

export const FilterButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    background-color: transparent;
    border: none;
    outline: none;
    opacity: 0.8;
    --color1: var(--first-text-color);
    cursor: pointer;
`;

export const TitleFilter = styled.p`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    color: var(--first-text-color);
`;

