import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 335px;
    border-radius: 8px;
    background: #121212;
    padding: 14px 21px 14px 24px;
`;

export const Title = styled.h2`
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
`;

export const Text = styled.p`
color: rgba(255, 255, 255, 0.50);
font-size: 12px;
line-height: 1.3;
border-bottom: 1px solid #FFFFFF1A;
padding-bottom: 14px;
`;

export const Tools = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ToolsTitle = styled.h3`
    color: rgba(255, 255, 255, 0.50);
    font-size: 8px;
    letter-spacing: -0.16px;
`;

export const ToolsText = styled.p`
    color: #FFF;
    font-size: 10px;
`;

export const ButtonList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    column-gap: 8px;
`;
export const Button = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
`