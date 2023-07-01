import { useSelector } from 'react-redux';
import { selectCard } from 'redux/dashboards/selectors';

import { ListItem } from 'components/listItem/listItem';

const AddList = ({ columnId }) => {
  const cards = useSelector(selectCard);
  const filteredCards = cards.filter(item => item.parentColumn === columnId);

  if (filteredCards.length < 1) {
    return;
  }

  return (
    <ul>
      {filteredCards.map(card => (
        <li key={card._id}>
          <ListItem
            id={card._id}
            title={card.title}
            text={card.description}
            priority={card.priority}
          />
        </li>
      ))}
    </ul>
  );
};

export default AddList;
