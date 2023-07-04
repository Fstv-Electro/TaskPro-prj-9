import { Sidebar } from 'components/sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import { EmptyPage } from 'components/HomeEmptyPage/HomeEmptyPage';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, ContainerMain } from './homePage.styled';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
  },
  deskMenu: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 260px)',
  },
};

export default function Home() {
  const location = useLocation();
  const hasAdditionalPath = location.pathname.length > '/home/'.length;

  return (
    <Container>
      <Sidebar />
      {!hasAdditionalPath ? (
        <ContainerMain >
          <Header />
          <EmptyPage />
        </ContainerMain>
      ) : (
        <ContainerMain >
          <Outlet />
        </ContainerMain>
      )}
    </Container>
  );
}
