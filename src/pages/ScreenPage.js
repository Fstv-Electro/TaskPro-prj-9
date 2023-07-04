import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectBackground } from 'redux/dashboards/selectors';
import { backgroundUrl } from 'redux/dashboards/operations';
import { useMediaQuery } from 'react-responsive';
import { Header } from 'components/Header/Header';

import { DashboardHeader } from 'components/HeaderDashboard/HeaderDashboard';
import { DashboardMain } from 'components/MainDashboard/MainDashboard';

import { Container } from './ScreenPage.styled';

export default function ScreenPage() {
  const [bgUrls, setBgUrls] = useState(null);

  const currBg = useSelector(selectBackground);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBgs = async () => {
      const res = await dispatch(backgroundUrl());
      const currentBgUrl = res.payload.filter(item => item._id === currBg);
      setBgUrls(currentBgUrl[0]);
    };
    getBgs();
  }, [currBg, dispatch]);

  const mobileScreen = useMediaQuery({
    minWidth: 375,
    maxWidth: 767,
  });
  const tabletScreen = useMediaQuery({
    minWidth: 768,
    maxWidth: 1279,
  });
  const desktopScreen = useMediaQuery({ minWidth: 1280 });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <Container
      style={
        bgUrls
          ? isRetina
            ? mobileScreen
              ? {
                  backgroundImage: `url(${bgUrls.tabletURL})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  height: 'calc(100vh - 24px)',
                }
              : tabletScreen
              ? {
                  backgroundImage: `url(${bgUrls.desktopURL})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  height: 'calc(100vh - 24px)',
                }
              : desktopScreen && {
                  backgroundImage: `url(${bgUrls.retinaURL})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  height: 'calc(100vh - 24px)',
                }
            : mobileScreen
            ? {
                backgroundImage: `url(${bgUrls.mobileURL})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 'calc(100vh - 24px)',
              }
            : tabletScreen
            ? {
                backgroundImage: `url(${bgUrls.tabletURL})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 'calc(100vh - 24px)',
              }
            : desktopScreen && {
                backgroundImage: `url(${bgUrls.desktopURL})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 'calc(100vh - 24px)',
              }
          : null
      }
    >
      <Header />
      <DashboardHeader />
      <DashboardMain />
    </Container>
  );
}
