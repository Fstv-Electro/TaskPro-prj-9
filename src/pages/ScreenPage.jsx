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

  const responsiveScreen = useMediaQuery({ maxWidth: 374 });
  const mobileScreen = useMediaQuery({
    minWidth: 375,
    maxWidth: 767,
  });
  const tabletScreen = useMediaQuery({
    minWidth: 768,
    maxWidth: 1440,
  });
  const desktopScreen = useMediaQuery({ minWidth: 1440 });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <Container
      style={
        bgUrls
          ? isRetina
            ? responsiveScreen
              ? {
                  backgroundImage: 'url('+bgUrls.tabletURL+')',
                }
              : mobileScreen
              ? {
                  backgroundImage: 'url('+bgUrls.tabletURL+')',
                }
              : tabletScreen
              ? {
                  backgroundImage: 'url('+bgUrls.desktopURL+')',
                }
              : desktopScreen && {
                  backgroundImage: 'url('+bgUrls.retinaURL+')',
                }
            : responsiveScreen
            ? {
                backgroundImage: 'url('+bgUrls.mobileURL+')',
              }
            : mobileScreen
            ? {
                backgroundImage: 'url('+bgUrls.mobileURL+')',
              }
            : tabletScreen
            ? {
                backgroundImage: 'url('+bgUrls.tabletURL+')',
              }
            : desktopScreen && {
                backgroundImage: 'url('+bgUrls.desktopURL+')',
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
