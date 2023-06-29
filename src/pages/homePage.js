import { Sidebar } from 'components/sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import { AddColumn } from 'components/addColumn/addColumn';
import { ColumnItem } from 'components/columnItem/columnItem';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
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
        <AddColumn />
        <ColumnItem />
      </div>
    </div>
  );
}
