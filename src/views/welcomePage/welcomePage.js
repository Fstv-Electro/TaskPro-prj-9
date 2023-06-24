import {
  Container,
  TitleContainer,
  Title,
  Images,
  Text,
  ButtonRegistered,
  ButtonLogIn,
} from './welcomePage.styled';
import logo from '../../images/user-desktop1x.png';

export const WelcomePage = () => {
  return (
    <Container>
      <Images src={logo} alt="Boy with Macbook" />
      <TitleContainer>
        <img src="" alt="Logo" />
        <Title>Task Pro</Title>
      </TitleContainer>
      <Text>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </Text>
      <ButtonRegistered to="/register">Registration</ButtonRegistered>
      <ButtonLogIn to="/login">Log In</ButtonLogIn>
    </Container>
  );
};
