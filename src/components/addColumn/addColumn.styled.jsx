import styled from '@emotion/styled';

export const Container = styled.div`
  width: 334px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 320px) and (max-width: 375px) {
    width: 100%;
  }
`;
