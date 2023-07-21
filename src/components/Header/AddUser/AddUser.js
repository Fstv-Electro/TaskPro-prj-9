import sprite from '../../../images/symbol-defs.svg';
import { useState } from 'react';
import { Modal } from 'components/modal/modal';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import { ImgWrapper, Svg } from './AddUser.styled';
import { AddUserForm } from './AddUserForm/AddUserForm';
import { useSelector } from "react-redux";
import { selectIsLoading } from 'redux/auth/selectores';
import { Loading } from '../Loading/Loading';

export const AddUser = () => {
    const [modal, setModal] = useState(false);
    const isLoading = useSelector(selectIsLoading);
    
    const handleModalOpen = () => {
        setModal(true);
    }
    
    const handleClose = () => {
        setModal(false);
    }


    function findUniqueCharacter(text) {
        const words = text.split(' ');
        const array = [];

        for (const word of words) {
                
            for (let i = 0; i < word.length; i++) {
                const letter = word[i];
                let isUnique = true;
            
                for (let j = 0; j < word.length; j++) {
                  if (i !== j && letter === word[j]) {
                    isUnique = false;
                    break;
                  }
                }
                if (isUnique) {
                  array.push(letter);
                  break;
                }
              }
        }
        if (array.length === 1) {
            return array[0];
        }else if (array.length > 1) {
                
            for (let i = 0; i < array.length; i++) {
                const letter = array[i];
                let isUnique = true;
                                    
                for (let j = 0; j < array.length; j++) {
                    if (i !== j && letter === array[j]) {
                        isUnique = false;
                        break;
                    }
                }
                if (isUnique) {
                    return letter;
                }
            }   
        }            
        return 'No unique character found.';
    }

      
    
    // console.log(findUniqueCharacter('The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it. Geoffrey James, The Tao of Programming'))
    console.log(findUniqueCharacter('ddsSs'))

    return (
        <>
            <ImgWrapper onClick={handleModalOpen}>
                    <Svg aria-label="Add user" width="32px" height="32px">
                        <use href={sprite + '#icon-user-plus'}></use>
                    </Svg>
            </ImgWrapper>
            
            {modal && 
                <Modal onClose={handleClose}>
                    <ButtonClose onClose={handleClose}/>
                    <AddUserForm onClose={handleClose} isLoading={isLoading}/>
                    {isLoading && <Loading /> }
                </Modal>}
        
        </>
    )
}
