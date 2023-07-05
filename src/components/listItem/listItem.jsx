import { useState } from 'react';
import { EditCardForm } from 'components/addCardForm/editCardForm';
import { Modal } from 'components/modal/modal';

import {
  Container,
  Title,
  Text,
  Tools,
  ToolsTitle,
  ToolsText,
  ButtonList,
  Span,
} from './listItem.styled';
import ShiftBtnCard from 'components/ShiftBtnCard/ShiftBtnCard';
import DeleteBtnCard from 'components/DeleteBtnCard/DeleteBtnCard';
import EditBtnCard from 'components/EditBtnCard/EditBtnCard';
import { BellCard } from 'components/bellCard/bellCard';

export const ListItem = ({
  card: { _id, title, priority, description, deadline, parentColumn },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  let str = priority;
  const newPriority = str => str.charAt(0).toUpperCase() + str.slice(1);
  console.log(newPriority(str));
  
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
          <ToolsText>
            <Span priority={priority}></Span>
            {newPriority(str)}
          </ToolsText>
        </div>
        <div>
          <ToolsTitle>Deadline</ToolsTitle>
          <ToolsText>{deadline}</ToolsText>
        </div>
        <ButtonList>
          <BellCard deadline={deadline} />
          <li>
            <ShiftBtnCard id={_id} parentColumn={parentColumn} />
          </li>
          <EditBtnCard
            id={_id}
            title={title}
            description={description}
            deadline={deadline}
            priority={priority}
            parentColumn={parentColumn}
          />
          <li>
            <DeleteBtnCard id={_id} />
          </li>
        </ButtonList>
      </Tools>
      {isOpen && (
        <Modal
          onClose={toggleModal}
          children={
            <EditCardForm
              id={_id}
              onClose={toggleModal}
              parentColumn={parentColumn}
              title={title}
              description={description}
              priority={priority}
              old_deadline={deadline}
            />
          }
        />
      )}
    </Container>
  );
};
