import { Board } from 'components/board/board';
import { MainDiv } from './MainDashboard.styled';
import Scroll from '../Scroll/ScrollCostom';

export const DashboardMain = () => {
  return (
    <Scroll>
      <MainDiv>
        <Board />
      </MainDiv>
    </Scroll>
  );
};
