import {
  Container,
  WrapperLogOut,
  LogOutButton,
  LogOutIcon,
} from './LogOut.styled';

const LogOut = () => {
  return (
    <Container>
      <WrapperLogOut>
        <LogOutIcon />
        <LogOutButton>Log out </LogOutButton>
      </WrapperLogOut>
    </Container>
  );
};

export default LogOut;
