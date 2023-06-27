import { Sidebar } from 'components/sidebar/Sidebar';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
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
