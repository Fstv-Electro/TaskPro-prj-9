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
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;
export const ModalWindow = styled.div`
    /* min-width: 335px; */ //модалка має огортати контент 
    /* padding: 24px 24px 0 24px; */ //пропущен відступ знизу
    position: relative;
    padding: 24px 24px 24px 24px;
    border-radius: 8px;
    border: 1px solid rgba(190, 219, 176, 0.50);
    background: var(--modal-bg-color);
    color: var(--first-text-color);
    
    box-shadow: 0px 4px 16px 0px var(--modal-shadow-color);
    @media (min-width: 768px) {
        max-width: 400px;
      }
`;