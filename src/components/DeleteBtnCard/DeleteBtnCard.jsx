import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/dashboards/operations';
import sprite from '../../images/symbol-defs.svg';
import { Btn, IconDelete } from './DeleteBtnCard.styled';

const DeleteBtnCard = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <Btn onClick={() => dispatch(deleteTask(id))}>
      <IconDelete>
        <use href={sprite + '#icon-trash-04'}></use>
      </IconDelete>
    </Btn>
  );
};

export default DeleteBtnCard;
