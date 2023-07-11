import { DeleteTitle, Btn, WrapperDelete } from './ModalBoard.styled';
import { ButtonClose } from '../../modalBtnClose/ButtonClose';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../redux/dashboards/operations';
import { useNavigate } from 'react-router';

export const DeleteBoard = ({ desk, onClose }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(deleteBoard(desk.id));
    navigate(`/home`);
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
