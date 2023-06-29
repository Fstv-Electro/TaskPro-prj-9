import { useDispatch, useSelector } from "react-redux";
import { Container, TitleDashBoard, TitleFilter, FilterButton } from "./HeaderDashboard.styled";
import sprite from '../../images/symbol-defs.svg';
import { useState } from "react";
import { Filter } from "./FilterForm";


export const DashboardHeader = () => {
    const dispath = useDispatch();
    // const crntBoard = useSelector(currentBoard);
    const [isOpen, setIsOpen] = useState();
    
    const toggleModal = () => {
        setIsOpen(isOpen => !isOpen)
    };

    return (
        <Container>
            <TitleDashBoard>current dashboard title</TitleDashBoard>
            <FilterButton type="button" onClick={toggleModal}>
                <svg aria-label="filter icon" width='16' height='16'>
                <use href={sprite + '#icon-filter'}></use>
                </svg>
            <TitleFilter>Filters</TitleFilter>
            </FilterButton>
            {isOpen && <Filter onClose={ toggleModal } />}
        </Container>
    );
};