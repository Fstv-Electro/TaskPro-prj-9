import { ListItem } from 'components/listItem/listItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from 'redux/dashboards/slice';
import { selectFilter } from 'redux/dashboards/selectors';

const AddList = ({ tasks }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getCards(tasks));
  }, [dispatch, tasks]);

  let filteredList;
  if (tasks.length < 0) {
    return;
  }

  if (filter === 'All') {
    filteredList = tasks;
  }
  tasks.map(card => console.log(card.priority === filter.toLowerCase()));
  filteredList = tasks.filter(card => card.priority === filter.toLowerCase());

  return (
    <ul>
      {filteredList.map(card => (
        <li key={card._id}>
          <ListItem card={card} />
        </li>
      ))}
    </ul>
  );
};

export default AddList;
