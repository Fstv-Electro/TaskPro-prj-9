import { Sidebar } from 'components/sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import { EmptyPage } from 'components/HomeEmptyPage/HomeEmptyPage';
import { useSelector } from 'react-redux';
import { selectBoard } from 'redux/dashboards/selectors';
import { Outlet } from 'react-router-dom';

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
    width: '100%',
  },
};

export default function Home() {
  const boards = useSelector(selectBoard);

  return (
    <div style={styles.container}>
      <Sidebar />
        {boards.length === 0 ? (
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
