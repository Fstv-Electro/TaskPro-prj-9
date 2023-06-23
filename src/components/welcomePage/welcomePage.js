import {
  Container,
  TitleContainer,
  Title,
  Images,
  Text,
  Button,
  ButtonLogIn,
} from './welcomePage.styled';

export const WelcomePage = () => {
  return (
    <Container>
      <Images
        src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        alt="Boy with Macbook"
      />
      <TitleContainer>
        <img src="" alt="Logo" />
        <Title>Task Pro</Title>
      </TitleContainer>
      <Text>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </Text>
      <Button>Registration</Button>
      <ButtonLogIn>Log In</ButtonLogIn>
    </Container>
  );
};
