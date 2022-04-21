import React from 'react';
import modal from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Modal({children, onClose, isOpen}) {


    return(
        <ModalOverlay onClose={onClose} isOpen={isOpen}>
            <div className={modal.box} >
                <CloseIcon id='popup__close-icon' type="primary" onClick={onClose}/>
                {children}
            </div>
        </ModalOverlay>
    
    );
}