import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #1F1F1F;
    height: 100vh;
    overflow: hidden;
`

export const ContainerMain = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    width: calc(100% - 284px);
    height: 100%;

    @media (max-width: 1440px) { 
        width: 100%;
    }
`