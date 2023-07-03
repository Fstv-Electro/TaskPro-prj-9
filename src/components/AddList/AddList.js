import { ListItem } from 'components/listItem/listItem';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCards } from 'redux/dashboards/slice';
import { useSelector } from 'react-redux';
import { selectFilteredCards } from 'redux/dashboards/selectors';

const AddList = ({ tasks, columnId }) => {
  const dispatch = useDispatch();
  const filteredCards = useSelector(selectFilteredCards);

  useEffect(() => {
    dispatch(getCards(tasks));
  }, [dispatch, tasks]);

  return (
    <ul>
      {filteredCards.length < 0
        ? tasks.map(card => (
            <li key={card._id}>
              <ListItem card={card} />
            </li>
          ))
        : filteredCards.map(card =>
            card.parentColumn !== columnId ? (
              <li key={card._id}>
                <ListItem card={card} />
              </li>
            ) : null
          )}
    </ul>
  );
};

export default AddList;
