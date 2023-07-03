import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectList, selectCard } from 'redux/dashboards/selectors';
import { shiftCard } from 'redux/dashboards/operations';
import sprite from '../../images/symbol-defs.svg';
import {
  Btn,
  IconShift,
  ColumnList,
  Item,
  ItemBtn,
} from './ShiftBtnCard.styled';

const ShiftBtnCard = ({ id }) => {
  const [currentColumn, setCurrentColumn] = useState();
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const lists = useSelector(selectList);
  const cards = useSelector(selectCard);
  const dispatch = useDispatch();
  // const listsTitles = lists.map(item => item.title);

  const handleDropdownClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleColumnChange = e => {
    const nextColumnId = e.target.dataset.id;
    const currCard = cards.filter(item => item._id === id);
    setCurrentColumn(e.target.value);
    dispatch(
      shiftCard({
        prevCardId: id,
        card: currCard[0],
        newColumnId: nextColumnId,
      })
    );
  };

  return (
    <div>
      <Btn onClick={handleDropdownClick}>
        <IconShift>
          <use href={sprite + '#icon-arrow-circle-broken-right'}></use>
        </IconShift>
      </Btn>

      <ColumnList className={isDropdownActive ? 'active' : ''}>
        {lists.map(({ title, _id }) => (
          <Item key={_id}>
            <ItemBtn
              selected={currentColumn === title}
              disabled={currentColumn === title}
              value={title}
              onClick={handleColumnChange}
              data-id={_id}
            >
              {title}
            </ItemBtn>
          </Item>
        ))}
      </ColumnList>
    </div>
  );
};

export default ShiftBtnCard;
