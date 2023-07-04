import { DeleteTitle, Btn, WrapperDelete } from './ModalBoard.styled';

import { ButtonClose } from '../../modalBtnClose/ButtonClose';

import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, fetchBoards } from '../../../redux/dashboards/operations';
import { selectBoard } from 'redux/dashboards/selectors';

export const DeleteBoard = ({ desk, onClose }) => {
  const dispatch = useDispatch();
  const Boards = useSelector(selectBoard)
  console.log(desk.id);

  const handleSubmit = () => {
    dispatch(deleteBoard(desk.id));
    dispatch(fetchBoards(Boards));
    onClose();
  };

  return (
    <>
      <ButtonClose onClose={onClose} />
      <DeleteTitle>Delete Board?</DeleteTitle>
      <WrapperDelete>
        <Btn onClick={handleSubmit}>yes</Btn>
        <Btn onClick={() => onClose()}>no</Btn>
      </WrapperDelete>
    </>
  );
};
