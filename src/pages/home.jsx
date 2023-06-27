import { Sidebar } from '../components/sidebar/Sidebar.jsx';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  desk: {
    maxWidth: '100vw',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.desk}></div>
    </div>
  );
}
