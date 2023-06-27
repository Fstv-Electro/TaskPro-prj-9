import {
  WrapperBoards,
  Boards,
  WrapperCreate,
  CreateTitle,
  CreateButton,
  IconPlus,
} from './CreateBoard.styled';
import sprite from '../../../images/symbol-defs.svg';

export const CreateBoard = () => {
  return (
    <>
      <WrapperBoards>
        <Boards>My boards</Boards>
      </WrapperBoards>
      <WrapperCreate>
        <CreateTitle>Create a new board</CreateTitle>
        <CreateButton type="button" onClick={() => {}}>
          <IconPlus aria-label="question with round" width="20px" height="20px">
            <use href={sprite + '#icon-plus-add'}></use>
          </IconPlus>
        </CreateButton>
      </WrapperCreate>
    </>
  );
};
