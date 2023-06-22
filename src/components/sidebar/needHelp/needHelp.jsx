import { Container, Text, Span, Button, Help } from './NeedHelp.styled';

const NeedHelp = () => {
  return (
    <Container>
      <Text>
        If you need help with <Span>TaskPro</Span>, check out our support
        resources or reach out to our customer support team.
      </Text>
      <Button>
        <Help />
        Need help?
      </Button>
    </Container>
  );
};

export default NeedHelp;
