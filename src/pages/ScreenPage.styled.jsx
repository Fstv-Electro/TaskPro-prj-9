import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 8px;
  background-color: var(--main-bg-color);
  color: var(--first-text-color);

  margin: 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 260px);
  width: 100%;

    @media (max-width: 767px) {
      width: 100%;
    };
`;
