import {
  Container,
  WrapperBoards,
  Boards,
  WrapperCreate,
  CreateTitle,
  CreateButton,
  Plus,
} from './CreateBoard.styled';

const CreateBoard = () => {
  return (
    <Container>
      <WrapperBoards>
        <Boards>My boards</Boards>
      </WrapperBoards>
      <WrapperCreate>
        <CreateTitle>Create a new board</CreateTitle>
        <CreateButton>
          <Plus />
        </CreateButton>
      </WrapperCreate>
    </Container>
  );
};

export default CreateBoard;
