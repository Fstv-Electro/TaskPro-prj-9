import { useState } from 'react';
import { UserContainer, UserEmail, ImgWrapper, Img } from "./UserInfo.styled";
import { Modal } from '../../modal/modal';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import { EdidUserForm }  from './EditUserForm/EditUserForm'
import sprite from '../../../images/symbol-defs.svg';
import { Loading } from '../Loading/Loading';
import { useSelector } from "react-redux";
import { selectIsLoading } from 'redux/auth/selectores';

export const UserInfo = ({name="user", avatarURL}) => {
  const [modal, setModal] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const handleModalOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
      <UserContainer>
        <UserEmail>{name}</UserEmail>
        <ImgWrapper onClick={handleModalOpen}>
          {avatarURL ? (
            <Img src={avatarURL} alt="User picture" />
          ) : (
            <svg aria-label="User picture" width="32px" height="32px">
                <use href={sprite + '#icon-user'}></use>
            </svg>
          )}
        </ImgWrapper>
        {modal && 
          <Modal onClose={handleClose}>
            <ButtonClose onClose={handleClose}/>
            <EdidUserForm avatarURL={avatarURL} onClose={handleClose} isLoading={isLoading}/>
           {isLoading && <Loading /> }
          </Modal>}
        
      </UserContainer>
  );
};

