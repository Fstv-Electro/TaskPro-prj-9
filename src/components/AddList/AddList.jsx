import { ListItem } from 'components/listItem/listItem';
import { useSelector } from 'react-redux';
import { selectVisibleCards } from 'redux/dashboards/selectors';

import Scroll from '../Scroll/ScrollCostom';

const AddList = ({ columnId }) => {
  const tasks = useSelector(selectVisibleCards);

  const filteredList = tasks.filter(card => card.parentColumn === columnId);

  if (filteredList.length === 0) {
    return;
  }

  return (
    <Scroll width='calc(100% + 16px)'>
      <ul>
        {filteredList.map(card => (
          <li key={card._id}>
            <ListItem card={card} />
          </li>
        ))}
      </ul>
    </Scroll >
  );
};

export default AddList;
