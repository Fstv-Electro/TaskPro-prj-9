import { useState } from 'react';
import { UserContainer, UserEmail, ImgWrapper, Img } from "./UserInfo.stayled";
import { Modal } from '../../modal/modal';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import { EdidUserForm }  from './EditUserForm/EditUserForm'
import sprite from '../../../images/symbol-defs.svg';

export const UserInfo = ({name="user", avatarURL}) => {
  const [modal, setModal] = useState(false);

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
            <EdidUserForm avatarURL={avatarURL} />
          </Modal>}
        
      </UserContainer>
  );
};

