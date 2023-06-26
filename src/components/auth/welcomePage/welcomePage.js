import {
  Container,
  TitleContainer,
  Title,
  Images,
  Text,
  ButtonRegistered,
  ButtonLogIn,
  Icon,
} from './welcomePage.styled';
import logo from '../../../images/user-desktop1x.png';
import Sprite from '../../../images/symbol-defs.svg';

export const WelcomePage = () => {
  return (
    <Container>
      <Images src={logo} alt="Boy with Macbook" />
      <TitleContainer>
        <Icon aria-label="Logo">
          <use href={Sprite + '#icon-icon'}></use>
        </Icon>
        <Title>Task Pro</Title>
      </TitleContainer>
      <Text>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </Text>
      <ButtonRegistered to="/auth/register">Registration</ButtonRegistered>
      <ButtonLogIn to="/auth/login">Log In</ButtonLogIn>
    </Container>
  );
};
