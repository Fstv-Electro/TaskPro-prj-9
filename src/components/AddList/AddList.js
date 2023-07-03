import { ListItem } from 'components/listItem/listItem';

const AddList = ({ tasks }) => {
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
