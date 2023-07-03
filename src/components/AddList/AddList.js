import { ListItem } from 'components/listItem/listItem';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/dashboards/selectors';
import { selectCard } from 'redux/dashboards/selectors';

const AddList = ({ columnId }) => {
  const filter = useSelector(selectFilter);
  const tasks = useSelector(selectCard);
  // зробити юзселект до карток і додати перевірку відповідності до колонки

  let filteredList;

  if (filter === 'All') {
    filteredList = tasks;
  }

  const checkFilterColumn = tasks.filter(card => {
    return console.log(
      card.parentColumn === columnId,
      card.parentColumn,
      columnId
    );
  });
  console.log(checkFilterColumn);
  filteredList = tasks
    .filter(card => card.parentColumn === columnId)
    .filter(card => card.priority === filter.toLowerCase());

  if (tasks.length === 0) {
    return;
  }

  return (
    <ul>
      {filter === 'All'
        ? tasks.map(card => (
            <li key={card._id}>
              <ListItem card={card} />
            </li>
          ))
        : filteredList.map(card => (
            <li key={card._id}>
              <ListItem card={card} />
            </li>
          ))}
    </ul>
  );
};

export default AddList;
