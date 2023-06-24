import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalWindow = styled.div`
    min-width: 335px;
    padding: 24px 24px 0 24px;
    border-radius: 8px;
    border: 1px solid rgba(190, 219, 176, 0.50);
    background: #151515;
    color: #fff;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
    @media (min-width: 768px) {
        max-width: 400px;
      }
`;