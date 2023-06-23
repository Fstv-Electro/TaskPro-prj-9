
import { Container, Text, Span, Button, Image, TextButton } from "./needHelp.styled";
import background from "../../../images/help.png";
import sprite from "../../../images/symbol-defs.svg";

export const NeedHelp = () => {
    return (
        <Container>
          <Image src={background} alt="Logo" />
            <Text>
            If you need help with <Span>TaskPro</Span>, 
            check out our support resources or reach out to our customer support team.
            </Text>
            <Button>
            <svg
            aria-label="question with round"
            width="20px"
            height="20px"
          >
            <use href={sprite + "#icon-help-circle"}></use>
          </svg>
            <TextButton>Need help?</TextButton>
            </Button>
        </Container>
    )
}
