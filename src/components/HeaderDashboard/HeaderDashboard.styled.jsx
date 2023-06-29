import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100% - 20px);
  padding: 24px 10px;
  
    @media (min-width: 1280px) {
        height: 48px;
    };
    @media (min-width: 768px) {
        height: 80px;
    };
    @media (min-width: 375px) {
        height: 134px;
    };
    @media (max-width: 374px) {
        max-height: 134px;
    };
`;

export const TitleDashBoard = styled.p`    
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.36px;
    color: #FFF;
    margin: 0;
`;

export const TitleFilter = styled.p`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    color: rgba(255, 255, 255, 0.80);
`;

export const FilterButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    background-color: transparent;
    border: none;
    outline: none;
`;