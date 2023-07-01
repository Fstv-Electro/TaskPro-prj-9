import { CreateBoard } from './CreateBoard/CreateBoard';
import { MyBoards } from './MyBoards/MyBoards';
import { LogOut } from './LogOut/LogOut';
import { NeedHelp } from './needHelp/needHelp';
import {
  Container,
  WrapperTitle,
  Title,
  WrapperLogo,
  NavDashboards,
  NaviUser,
  NeedHelpLogOutContainer,
  Logo,
  IconMenu,
} from './Sidebar.styled';
import sprite from '../../../src/images/symbol-defs.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoard } from 'redux/dashboards/selectors';
import { fetchBoards } from 'redux/dashboards/operations';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const selectBoards = useSelector(selectBoard);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);
  
  const handleToggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.sidebar')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    let timeoutId;
  
    if (isOpen && isMobile) {
      timeoutId = setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
      }, 100);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
  
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, isMobile]);

  return (
    <>
     
      <IconMenu onClick={handleToggleSidebar} >
          <use href={sprite + '#icon-menu-01'}></use>
      </IconMenu> 
      
      <Container className='sidebar' isOpen={isOpen} >
        <NaviUser>
          <WrapperTitle>
            <WrapperLogo>
              <Logo aria-label="question with round" width="32px" height="32px">
                <use href={sprite + '#icon-icon'}></use>
              </Logo>
            </WrapperLogo>

            <Title>Task Pro</Title>
          </WrapperTitle>
          <CreateBoard />
        </NaviUser>
        <NavDashboards>
          <MyBoards />
          {selectBoards.map(board => (
            <MyBoards key={board._id} id={board._id} desk={board} />
          ))}
        </NavDashboards>
        <NeedHelpLogOutContainer>
          <NeedHelp />
          <LogOut />
        </NeedHelpLogOutContainer>
      </Container>
    </>
  );
};
