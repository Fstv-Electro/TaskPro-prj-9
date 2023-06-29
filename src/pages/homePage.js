import { Sidebar } from 'components/sidebar/Sidebar';
import { Header } from 'components/Header/Header';
// import { AddColumn } from 'components/addColumn/addColumn';
// import { ColumnItem } from 'components/columnItem/columnItem';
import { DashboardHeader } from 'components/HeaderDashboard/HeaderDashboard';
import { DashboardMain } from 'components/MainDashboard/MainDashboard.styled';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
  },
  deskMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.deskMenu}>
        <Header />
        <DashboardHeader />
        <DashboardMain />
      </div>
    </div>
  );
}
