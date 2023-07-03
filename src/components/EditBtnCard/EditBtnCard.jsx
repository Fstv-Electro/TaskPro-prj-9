import { useState } from 'react';
import sprite from '../../images/symbol-defs.svg';
import { Btn, Icon } from './EditBtnCard.styled';
import { Modal } from 'components/modal/modal';
import { EditCardForm } from 'components/addCardForm/editCardForm';

const EditBtnCard = ({ id }) => {
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
     {isOpen && <Modal onClose={toggleModal} children={<EditCardForm onClose={toggleModal}/>} />}
     </>
  );
};
export default EditBtnCard