import { useState } from 'react';
import sprite from '../../images/symbol-defs.svg';
import { Btn, Icon } from './EditBtnCard.styled';
import { Modal } from 'components/modal/modal';
import { EditCardForm } from 'components/addCardForm/editCardForm';

const EditBtnCard = ({ id, title, description, deadline, parentColumn, priority }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(isOpen => !isOpen)
    }

  return (
    <>
    <Btn onClick={toggleModal}>
      <Icon>
        <use href={sprite + '#icon-pencil-01'}></use>
      </Icon>
    </Btn>
     {isOpen && <Modal onClose={toggleModal} children={<EditCardForm onClose={toggleModal} id={id} parentColumn={parentColumn} old_deadline={deadline} priority={priority} title={title} description={description}/>} />}
     </>
  );
};
export default EditBtnCard