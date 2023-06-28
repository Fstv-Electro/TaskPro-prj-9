import { CreateBoard } from './CreateBoard/CreateBoard';
import { MyBoard } from './MyBoard/MyBoard';
import { LogOut } from './LogOut/LogOut';
import { NeedHelp } from './needHelp/needHelp';
import {
  Container,
  WrapperTitle,
  Title,
  WrapperNeonProject,
  NeonProject,
  WrapperLogo,
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

  // props deskId, currentBg, title, icon

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
      <MyBoard />
      {selectBoards.map(board => (
        <MyBoard key={nanoid()} desk={board} />
      ))}
      <NeedHelp />
      <LogOut />
    </Container>
  );
};
