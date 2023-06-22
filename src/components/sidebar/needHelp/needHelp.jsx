import { Container, Text, Span, Button } from "./needHelp.styled";

export const NeedHelp = () => {
    return (
        <Container>
            <Text>
            If you need help with <Span>TaskPro</Span>, 
            check out our support resources or reach out to our customer support team.
            </Text>
            <Button>Need help?</Button>
        </Container>
    )
}