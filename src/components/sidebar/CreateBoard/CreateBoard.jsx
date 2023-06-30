import { useState } from 'react';
import {
  WrapperBoards,
  Boards,
  WrapperCreate,
  CreateTitle,
  CreateButton,
  IconPlus,
} from './CreateBoard.styled';
import sprite from '../../../images/symbol-defs.svg';
import { Modal } from 'components/modal/modal';
import { ModalBoard } from '../modalBoard/ModalBoard';

export const CreateBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <>
      <WrapperBoards>
        <Boards>My boards</Boards>
      </WrapperBoards>
      <WrapperCreate>
        <CreateTitle>Create a new board</CreateTitle>
        <CreateButton type="button" onClick={toggleModal}>
          <IconPlus aria-label="question with round" width="40px" height="40px">
            <use href={sprite + '#icon-plus-add'}></use>
          </IconPlus>
        </CreateButton>
        {isOpen && (
          <Modal
            onClose={toggleModal}
            children={<ModalBoard onClose={toggleModal} />}
          />
        )}
      </WrapperCreate>
    </>
  );
};
