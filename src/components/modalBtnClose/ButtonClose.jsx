import sprite from '../../images/symbol-defs.svg';
import { Btn, IconClose } from './ButtonClose.styled';

export const ButtonClose = ({ onClose }) => {
  return (
    <Btn onClick={onClose}>
      <IconClose aria-label="exit">
        <use href={sprite + '#icon-x-close'}></use>
      </IconClose>
    </Btn>
  );
};
