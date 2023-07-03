import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectBackground } from 'redux/dashboards/selectors';
import { backgroundUrl } from 'redux/dashboards/operations';
import { useMediaQuery } from 'react-responsive';

import { DashboardHeader } from 'components/HeaderDashboard/HeaderDashboard';
import { DashboardMain } from 'components/MainDashboard/MainDashboard';

import { Container } from './ScreenPage.styled'

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
    query: '(min-width: 375px, max-width: 767px)',
  });
  const tabletScreen = useMediaQuery({
    query: '(min-width: 768px, max-width: 1179px)',
  });
  const desktopScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <Container
      style={
        bgUrls
          ? mobileScreen
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
            : desktopScreen
            ? {
                backgroundImage: `url(${bgUrls.desktopURL})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 'calc(100vh - 24px)',
              }
            : null
          : null
      }
    >
      <DashboardHeader />
      <DashboardMain />
    </Container>
  );
}
