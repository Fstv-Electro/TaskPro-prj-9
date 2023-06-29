import { CreateBoard } from './CreateBoard/CreateBoard';
import { MyBoards } from './MyBoards/MyBoards';
import { LogOut } from './LogOut/LogOut';
import { NeedHelp } from './needHelp/needHelp';
import {
  Container,
  WrapperTitle,
  Title,
  WrapperLogo,
  NavDashboards,
  NaviUser,
  NeedHelpLogOutContainer,
  Logo,
} from './Sidebar.styled';
import sprite from '../../../src/images/symbol-defs.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoard } from 'redux/dashboards/selectors';
import { fetchBoards } from 'redux/dashboards/operations';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const selectBoards = useSelector(selectBoard);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  return (
    <Container>
      <WrapperTitle>
        <WrapperLogo>
          <Logo aria-label="question with round" width="32px" height="32px">
            <use href={sprite + '#icon-icon'}></use>
          </Logo>
        </WrapperLogo>

        <Title>Task Pro</Title>
      </WrapperTitle>
      <CreateBoard />
      <NaviUser>
        <NavDashboards>
          <MyBoards />
          {selectBoards.map(board => (
            <MyBoards key={nanoid()} desk={board} />
          ))}
        </NavDashboards>
        <NeedHelpLogOutContainer>
          <NeedHelp />
          <LogOut />
        </NeedHelpLogOutContainer>
      </NaviUser>
    </Container>
  );
};
