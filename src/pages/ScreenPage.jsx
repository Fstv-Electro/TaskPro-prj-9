import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectBackground} from 'redux/dashboards/selectors';
import { backgroundUrl } from 'redux/dashboards/operations';
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

  return (
      <Container bg={bgUrls ? bgUrls : undefined} >
      <Header />
      <DashboardHeader />
      <DashboardMain />
    </Container>
  );
}
