import { CreateBoard } from './СreateBoard/CreateBoard';
import { MyBoard } from './myBoard/MyBoard';
import { LogOut } from './logOut/LogOut';
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

export const Sidebar = () => {
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
      <WrapperNeonProject>
        <svg aria-label="question with round" width="18px" height="18px">
          <use href={sprite + '#icon-puzzle-piece-02'}></use>
        </svg>
        <NeonProject>Neon Light Project</NeonProject>
      </WrapperNeonProject>
      <NeedHelp />
      <LogOut />
    </Container>
  );
};
