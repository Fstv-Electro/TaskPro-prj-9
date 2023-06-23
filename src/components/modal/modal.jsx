import { createPortal } from "react-dom";
import { Component } from "react";
import { Backdrop, ModalWindow } from "./modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.keyDownEvent)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDownEvent)
    }

    keyDownEvent = e => {
        if(e.code === 'Escape') {
            this.props.onClose()
        }
    }
    onCloseBackdrop = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose()
        }
    }
    render() {
        return (
            createPortal(<Backdrop onClick={this.onCloseBackdrop}>
            <ModalWindow>   

            </ModalWindow>
            </Backdrop>, modalRoot)
            ) 
    }
         
}