import { ListItem } from 'components/listItem/listItem';
import { useSelector } from 'react-redux';
import {} from 'redux/dashboards/slice';
import { selectFilter } from 'redux/dashboards/selectors';

const AddList = ({ tasks }) => {
  const filter = useSelector(selectFilter);

  // зробити юзселект до карток і додати перевірку відповідності до колонки

  let filteredList;
  console.log(tasks);
  if (tasks === undefined) {
    return;
  }

  if (filter === 'All') {
    filteredList = tasks;
  }

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
