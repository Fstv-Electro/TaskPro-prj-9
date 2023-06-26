import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 61px;
  width: 100%;
  /* border-right: 4px solid #bedbb0; */
  background-color: #1f1f1f;
  margin-bottom: 24px;
  color: #fff;
  &:after {
    content: '';
    display: flex;
    position: absolute;
    right: 0;
    border-radius: 4px 0px 0px 4px;
    background: #bedbb0;
    width: 4px;
    height: 61px;
  }
`;

export const WrapperProjectOffice = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Project = styled.p`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 8px;
`;

export const WrapperProjectIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
`;
