import { Task } from 'components/task/task';
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
    <Scroll width="calc(100% + 16px)" height="-1%">
      <ul>
        {filteredList.map(card => (
          <li key={card._id}>
            <Task card={card} />
          </li>
        ))}
      </ul>
    </Scroll>
  );
};

export default AddList;
