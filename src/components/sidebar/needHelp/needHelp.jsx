
import { Container, Text, Span, Button, Image } from "./needHelp.styled";
import background from "../../../images/2.png";

export const NeedHelp = () => {
    return (
        <Container>
          <Image src={background} alt="Logo" />
            <Text>
            If you need help with <Span>TaskPro</Span>, 
            check out our support resources or reach out to our customer support team.
            </Text>
            <Button>
                Need help?
            </Button>
        </Container>
    )
}
