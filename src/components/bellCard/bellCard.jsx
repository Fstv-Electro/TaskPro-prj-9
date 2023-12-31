import sprite from '../../images/symbol-defs.svg';
import { Icon } from './bellCard.styled';

export const BellCard = ({ deadline }) => {
  if (deadline === null) {
    return;
  }
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const deadlineParts = deadline.split('-');
  const deadlineDate = new Date(
    Number(deadlineParts[2]),
    Number(deadlineParts[1]) - 1,
    Number(deadlineParts[0])
  );
  deadlineDate.setHours(0, 0, 0, 0);

  const remainingTime = deadlineDate.getTime() - now.getTime();
  const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  if (remainingDays > 1) {
    return null;
  }

  let color = '#bedbb0';

  if (remainingDays === 0) {
    color = '#0B5BF1';
  } else if (remainingDays < 0) {
    color = '#FF3814';
  } else if (remainingDays === 1) {
    color = '#bedbb0';
  }

  return (
    <li>
      <Icon color={color}>
        <use href={sprite + '#icon-bell-01'}></use>
      </Icon>
    </li>
  );
};
