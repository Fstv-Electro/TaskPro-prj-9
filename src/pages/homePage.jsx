import { Sidebar } from 'components/sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import { EmptyPage } from 'components/HomeEmptyPage/HomeEmptyPage';
import { Outlet, useLocation } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
    height: '100vh ',
  },
  deskMenu: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
};

export default function Home() {
  const location = useLocation();
  const hasAdditionalPath = location.pathname.length > '/home/'.length;

  return (
    <div style={styles.container}>
      <Sidebar />
        {!hasAdditionalPath ? (
        <div style={styles.deskMenu}>
          <Header />
          <EmptyPage />
        </div>
      ) : (
        <div style={styles.deskMenu}>
          <Header />
          <Outlet />
        </div>
      )}
    </div>
  );
}
