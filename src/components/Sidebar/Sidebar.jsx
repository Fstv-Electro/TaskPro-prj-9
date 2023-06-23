import CreateBoard from './CreateBoard/CreateBoard';
import MyBoard from './MyBoard/MyBoard';
import LogOut from './LogOut/LogOut';
import NeedHelp from './needHelp/NeedHelp';
import {
  Container,
  WrapperTitle,
  Lightning,
  Title,
  WrapperNeonProject,
  NeonProject,
  Puzzle,
} from './Sidebar.styled';

const Sidebar = () => {
  return (
    <Container>
      <WrapperTitle>
        <Lightning />
        <Title>Task Pro</Title>
      </WrapperTitle>
      <CreateBoard />
      <MyBoard />
      <WrapperNeonProject>
        <Puzzle />
        <NeonProject>Neon Light Project</NeonProject>
      </WrapperNeonProject>
      <NeedHelp />
      <LogOut />
    </Container>
  );
};

export default Sidebar;
