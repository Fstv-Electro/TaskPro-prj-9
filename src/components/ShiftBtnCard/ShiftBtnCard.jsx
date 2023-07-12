import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectList, selectCard } from 'redux/dashboards/selectors';
import { moveTaskToColumn } from 'redux/dashboards/operations';
import { moveTaskToColumnState } from 'redux/dashboards/slice';
import sprite from '../../images/symbol-defs.svg';
import {
  Btn,
  IconShift,
  ColumnList,
  Item,
  ItemBtn,
} from './ShiftBtnCard.styled';

const ShiftBtnCard = ({ id, parentColumn }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const lists = useSelector(selectList);
  const cards = useSelector(selectCard);
  const dispatch = useDispatch();

  const handleDropdownClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleColumnChange = e => {
    const nextColumnId = e.target.dataset.id;
    const columnSource = lists.filter(column => column._id === parentColumn)[0];
    const columnDestination = lists.filter(
      column => column._id === nextColumnId
    )[0];
    const task = cards.filter(item => item._id === id)[0];
    const movedTask = { ...task, parentColumn: columnDestination._id };
    const startTaskOrder = [...columnSource.taskOrder].filter(n => n !== id);
    const finishTaskOrder = [...columnDestination.taskOrder, id];
    const columnSourceOrder = {
      [parentColumn]: startTaskOrder,
    };
    const columnDestinationOrder = {
      [nextColumnId]: finishTaskOrder,
    };

    dispatch(
      moveTaskToColumn({
        taskId: id,
        columnSourceOrder,
        columnDestinationOrder,
      })
    );

    dispatch(
      moveTaskToColumnState({
        movedTask,
        startTaskOrder,
        finishTaskOrder,
        columnSource: columnSource._id,
        columnDestination: columnDestination._id,
      })
    );
    handleDropdownClick();
  };

  const modalList = lists.filter(list => list._id !== parentColumn);

  return (
    <div>
      <Btn onClick={handleDropdownClick}>
        <IconShift>
          <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
        </IconShift>
      </Btn>

      <ColumnList className={isDropdownActive ? 'active' : ''}>
        {modalList.map(({ title, _id }) => {
          return (
            <Item key={_id}>
              <ItemBtn
                selected={parentColumn === _id}
                disabled={parentColumn === _id}
                value={title}
                onClick={handleColumnChange}
                data-id={_id}
              >
                <nobr data-id={_id}>
                  {title.length > 12 ? title.slice(0, 12) + '...' : title}
                </nobr>
                <IconShift data-id={_id}>
                  <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
                </IconShift>
              </ItemBtn>
            </Item>
          );
        })}
      </ColumnList>
    </div>
  );
};

export default ShiftBtnCard;
