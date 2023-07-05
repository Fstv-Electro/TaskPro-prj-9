import styled from '@emotion/styled';

export const Container = styled.div`

  padding-bottom: 8px;
  background-color: var(--main-bg-color);
  color: var(--first-text-color);


  overflow: hidden;


  margin: 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 260px);
  width: 100%;
  height: 100vh;

    @media (max-width: 1440px) {
      width: 100%;
    };
`;
