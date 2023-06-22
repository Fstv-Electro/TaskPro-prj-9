import {
  Container,
  WrapperProject,
  WrapperProjectOffice,
  Project,
  Appstore,
  Edit,
  Delete,
  WrapperProjectIcons,
  IconButton,
} from './MyBoard.styled';

const MyBoard = () => {
  return (
    <Container>
      <WrapperProject>
        <WrapperProjectOffice>
          <Appstore />
          <Project>Project office</Project>
        </WrapperProjectOffice>
        <WrapperProjectIcons>
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
        </WrapperProjectIcons>
      </WrapperProject>
    </Container>
  );
};

export default MyBoard;
