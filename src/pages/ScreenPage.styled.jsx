import styled from '@emotion/styled';

export const Container = styled.div`

  padding-bottom: 8px;
  background-color: var(--main-bg-color);
  background-image: '';
  color: var(--first-text-color);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;

  overflow: hidden;


  margin: 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 260px);
  width: 100%;
  height: 100vh;

  @media (max-width: 375px) {
    background-image: url(${(props) => props.bg?.mobileURL});
    max-width: 100%;
  };

  @media (min-width: 375px) and (max-width: 768px) {
    background-image: url(${(props) => props.bg?.mobileURL});

    @media (-webkit0min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: url(${(props) => props.bg?.tabletURL});
      }
  };

  @media (min-width: 768px) and (max-width: 1440px) {
    background-image: url(${(props) => props.bg?.tabletURL});

    @media (-webkit0min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: url(${(props) => props.bg?.desktopURL});
      }
  };


  @media (min-width: 1440px) {
    width: 100%;

    background-image: url(${(props) => props.bg?.desktopURL});

    @media (-webkit0min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: url(${(props) => props.bg?.retinaURL});
      }
  };
`;
