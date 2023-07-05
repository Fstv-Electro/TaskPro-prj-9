import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 34px;
  height: 100%;
  /* overflow-x: scroll; */
  padding-right: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 34px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 14px;
`;
