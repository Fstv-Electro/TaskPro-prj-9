import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectList, selectCard } from 'redux/dashboards/selectors';
import { shiftTask } from 'redux/dashboards/operations';
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
    const currCard = cards.filter(item => item._id === id);
    dispatch(
      shiftTask({
        prevCardId: id,
        card: currCard[0],
        newColumnId: nextColumnId,
      })
    );
    handleDropdownClick();
  };

  return (
    <div>
      <Btn onClick={handleDropdownClick}>
        <IconShift>
          <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
        </IconShift>
      </Btn>

      <ColumnList className={isDropdownActive ? 'active' : ''}>
        {lists.map(({ title, _id }) => {
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
