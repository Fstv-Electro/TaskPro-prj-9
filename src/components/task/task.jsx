import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
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
} from './task.styled';
import ShiftBtnCard from 'components/ShiftBtnCard/ShiftBtnCard';
import DeleteBtnCard from 'components/DeleteBtnCard/DeleteBtnCard';
import EditBtnCard from 'components/EditBtnCard/EditBtnCard';
import { BellCard } from 'components/bellCard/bellCard';

export const Task = ({
  task: { _id, title, priority, description, deadline, parentColumn },
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  let str = priority;
  const newPriority = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Draggable draggableId={_id} index={index}>
      {(provided, snapshot) => (
        <Container
          priority={priority}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDraggin={snapshot.isDragging}
        >
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
      )}
    </Draggable>
  );
};

// <Container priority={priority}>
// <div>
//   <Title>{title}</Title>
//   <Text>
//     {description.length > 100
//       ? description.slice(0, 100) + '...'
//       : description}
//   </Text>
// </div>

// <Tools>
//   <div>
//     <ToolsTitle>Priority</ToolsTitle>
//     <ToolsText>
//       <Span priority={priority}></Span>
//       {newPriority(str)}
//     </ToolsText>
//   </div>
//   <div>
//     <ToolsTitle>Deadline</ToolsTitle>
//     <ToolsText>{deadline}</ToolsText>
//   </div>
//   <ButtonList>
//     <BellCard deadline={deadline} />
//     <li>
//       <ShiftBtnCard id={_id} parentColumn={parentColumn} />
//     </li>
//     <EditBtnCard
//       id={_id}
//       title={title}
//       description={description}
//       deadline={deadline}
//       priority={priority}
//       parentColumn={parentColumn}
//     />
//     <li>
//       <DeleteBtnCard id={_id} />
//     </li>
//   </ButtonList>
// </Tools>
// {isOpen && (
//   <Modal
//     onClose={toggleModal}
//     children={
//       <EditCardForm
//         id={_id}
//         onClose={toggleModal}
//         parentColumn={parentColumn}
//         title={title}
//         description={description}
//         priority={priority}
//         old_deadline={deadline}
//       />
//     }
//   />
// )}
// </Container>
