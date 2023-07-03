import { useState } from 'react';
import { AddColumnForm } from './addColumnForm/addColumnForm';
import { Container } from './addColumn.styled';
import SubmitButton from '../submitButton/submitButton';

export const AddColumn = ({ boardId, numberOfColumns = null }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const buttonText = numberOfColumns > 0 ? 'Add another column' : 'Add column';

  return (
    <Container>
      <SubmitButton
        title={buttonText}
        type="button"
        width="334"
        height="56"
        icon={true}
        addColumn={true}
        handleClick={toggleModal}
      />

      {isOpen && <AddColumnForm id={boardId} onClose={toggleModal} />}
    </Container>
  );
};
