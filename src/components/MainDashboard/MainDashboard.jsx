import { ListColumns } from 'components/listColumns/listColumns';
import { MainDiv } from './MainDashboard.styled';
import Scroll from '../Scroll/ScrollCostom';


export const DashboardMain = () => {
  return (
    <Scroll >
      <MainDiv>
        <ListColumns />
      </MainDiv>
    </Scroll>
  );
};
