import { ListItem } from 'components/listItem/listItem';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCards } from 'redux/dashboards/slice';

const AddList = ({ tasks }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards(tasks));
  }, [dispatch, tasks]);

  return (
    <ul>
      {tasks.map(card => (
        <li key={card._id}>
          <ListItem card={card} />
        </li>
      ))}
    </ul>
  );
};

export default AddList;
