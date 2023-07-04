import {
  Container,
  Title,
  Text,
  Tools,
  ToolsTitle,
  ToolsText,
  ButtonList,
  Button,
} from './listItem.styled';
import sprite from '../../images/symbol-defs.svg';
import ShiftBtnCard from 'components/ShiftBtnCard/ShiftBtnCard';
import DeleteBtnCard from 'components/DeleteBtnCard/DeleteBtnCard';

export const ListItem = ({
  card: { _id, title, priority, description, deadline, parentColumn },
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Tools>
        <div>
          <ToolsTitle>Priority</ToolsTitle>
          <ToolsText>{priority}</ToolsText>
        </div>
        <div>
          <ToolsTitle>Deadline</ToolsTitle>
          <ToolsText>{deadline}</ToolsText>
        </div>
        <ButtonList>
          <li>
            <ShiftBtnCard id={_id} parentColumn={parentColumn} />
          </li>
          <li style={{height: 16}}>
            <Button>
              <svg aria-label="icon pencil" width="16px" height="16px">
                <use href={sprite + '#icon-pencil-01'}></use>
              </svg>
            </Button>
          </li>
          <li>
            <DeleteBtnCard id={_id} />
          </li>
        </ButtonList>
      </Tools>
    </Container>
  );
};
