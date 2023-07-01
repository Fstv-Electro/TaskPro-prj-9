import styled from '@emotion/styled';

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    color: rgba(255, 255, 255, 1);
`;
export const UserEmail = styled.p`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
    margin-right: 8px;
`;

export const ImgWrapper = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease-out;
    transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover{
            box-shadow: 0px 0px 11px 0px rgba(190, 219, 176, 1);
            transform: scale(1.1);
        }
`
export const Img = styled.img`
        width: 100%;
		height: 100%;
		object-fit: cover;
`