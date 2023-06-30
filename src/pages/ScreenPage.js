import { DashboardHeader } from 'components/HeaderDashboard/HeaderDashboard';
import { DashboardMain } from 'components/MainDashboard/MainDashboard.styled';
import { EmptyPage } from 'components/HomeEmptyPage/HomeEmptyPage';
import { useSelector } from 'react-redux';
import { selectBoard } from 'redux/dashboards/selectors';

export default function ScreenPage() {
  const boards = useSelector(selectBoard);
  console.log(boards);
  if (boards.length === 0) {
    return <EmptyPage />;
  }

  return (
    <>
      <DashboardHeader />
      <DashboardMain />
    </>
  );
}
