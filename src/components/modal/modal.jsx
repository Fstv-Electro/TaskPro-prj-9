import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Backdrop, ModalWindow } from "./modal.styled";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({onClose, children}) => {

    useEffect(() => {
        const keyDownEvent = e => {
            if(e.code === 'Escape') {
                onClose()
            }
        }
        window.addEventListener('keydown', keyDownEvent);

        return () => {
            window.removeEventListener('keydown', keyDownEvent)
        }
    }, [onClose])
 
   const onCloseBackdrop = e => {
        if(e.currentTarget === e.target) {
            onClose()
        }
    }
    return (
            createPortal(<Backdrop onClick={onCloseBackdrop}>
            <ModalWindow>   
                {children}
            </ModalWindow>
            </Backdrop>, modalRoot)
    )
         
}