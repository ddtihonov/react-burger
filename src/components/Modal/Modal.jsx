import React from 'react';
import modal from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function Modal({children, onClose, isOpen}) {


    return(
        <ModalOverlay onClose={onClose} isOpen={isOpen}>
            <div className={modal.box} >
                <button className={modal.close_icon} type="button" aria-label="закрыть" onClick={onClose}>
                    <CloseIcon className={modal.close_icon} id='popup__close-icon' type="primary"/></button>
                {children}
            </div>
        </ModalOverlay>
    
    );
};

Modal.propTypes = {
    children: PropTypes.object,
    onClose: PropTypes.func, 
    isOpen: PropTypes.bool, 
};