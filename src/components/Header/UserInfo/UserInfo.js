import { useState } from 'react';
import { UserContainer, UserEmail, ImgWrapper, Img } from "./UserInfo.stayled";
import { Modal } from '../../modal/modal';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import { EdidUserForm }  from './EditUserForm/EditUserForm'
import sprite from '../../../images/symbol-defs.svg';

export const UserInfo = ({email, imageUrl}) => {
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
      <UserContainer>
        <UserEmail>Ivetta</UserEmail>
        <ImgWrapper onClick={handleModalOpen}>
          {imageUrl ? (
            <Img src={imageUrl} alt="User picture" />
          ) : (
            <svg aria-label="User picture" width="32px" height="32px">
                <use href={sprite + '#icon-user'}></use>
            </svg>
          )}
        </ImgWrapper>
        {modal && 
          <Modal onClose={handleClose}>
            <ButtonClose onClose={handleClose}/>
            <EdidUserForm />
          </Modal>}
        
      </UserContainer>
  );
};

