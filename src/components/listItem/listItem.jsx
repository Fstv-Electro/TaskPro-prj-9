import {
  Container,
  Title,
  Text,
  Tools,
  ToolsTitle,
  ToolsText,
  ButtonList,
  Span
} from './listItem.styled';
import ShiftBtnCard from 'components/ShiftBtnCard/ShiftBtnCard';
import DeleteBtnCard from 'components/DeleteBtnCard/DeleteBtnCard';
import EditBtnCard from 'components/EditBtnCard/EditBtnCard';

export const ListItem = ({
  card: { _id, title, priority, description, deadline, parentColumn },
}) => {
  return (
    <Container priority={priority}>
      <div>
        <Title>{title}</Title>
        <Text>
          {description.length > 100
            ? description.slice(0, 100) + '...'
            : description}
        </Text>
      </div>

      <Tools>
        <div>
          <ToolsTitle>Priority</ToolsTitle>
          <ToolsText><Span priority={priority}></Span>{priority}</ToolsText>
        </div>
        <div>
          <ToolsTitle>Deadline</ToolsTitle>
          <ToolsText>{deadline}</ToolsText>
        </div>
        <ButtonList>
          <li>
            <ShiftBtnCard id={_id} parentColumn={parentColumn} />
          </li>
          <EditBtnCard id={_id}/>
          <li>
            <DeleteBtnCard id={_id} />
          </li>
        </ButtonList>
      </Tools>
    </Container>
  );
};
