import {
  Container,
  TitleDashBoard,
  TitleFilter,
  FilterButton,
} from './HeaderDashboard.styled';
import sprite from '../../images/symbol-defs.svg';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter } from './FilterForm';

export const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState();
  const { boardName } = useParams();

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <Container>
      <TitleDashBoard>{boardName.split('-').join(' ')}</TitleDashBoard>
      <FilterButton type="button" onClick={toggleModal}>
        <svg aria-label="filter icon" width="16" height="16">
          <use href={sprite + '#icon-filter'}></use>
        </svg>
        <TitleFilter>Filters</TitleFilter>
      </FilterButton>
      {isOpen && <Filter onClose={toggleModal} />}
    </Container>
  );
};
