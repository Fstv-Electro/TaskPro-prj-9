import styled from '@emotion/styled';

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    color: rgba(255, 255, 255, 1);
    margin-right: 24px;
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
`
export const Img = styled.img`
        width: 100%;
		height: 100%;
		object-fit: cover;
`