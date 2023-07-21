import styled from '@emotion/styled';

export const ImgWrapper = styled.div`
    width: 32px;
    height: 32px;
    margin-right: 14px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s ease-out;
    transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover{
            box-shadow: 0px 0px 11px 0px rgba(190, 219, 176, 1);
            transform: scale(1.1);
        }
`
export const Svg = styled.svg`
    fill: var(--last-text-color);
    
`