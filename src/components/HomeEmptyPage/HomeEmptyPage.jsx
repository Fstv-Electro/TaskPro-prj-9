import { Container, InfoText, AccentText } from "./HomeEmptyPage.styled";

export const EmptyPage = () => {
    return (
        <Container>
            <InfoText>
                Before starting your project, it is essential
                <AccentText>to create a board</AccentText> to visualize and track all the necessary tasks and milestones.
                This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
            </InfoText>
        </Container>
    );
};