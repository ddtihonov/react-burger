import React, { useEffect} from 'react';
import { createPortal } from "react-dom";
import modal from './Modal.module.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function Modal({children, onClose, isOpen}) {

    useEffect(() => {
        const handleEscClose = (evt) =>{
            if (evt.key ==='Escape')  onClose();
        }
        document.addEventListener('keydown', handleEscClose);
        return () => document.removeEventListener('keydown', handleEscClose);
    }, [onClose]);

    return createPortal (
        <>
        <ModalOverlay onClick={onClose} isOpen={isOpen}/>
            <div className={modal.box} >
                <button className={modal.close_icon} type="button" aria-label="закрыть" onClick={onClose}>
                    <CloseIcon className={modal.close_icon}  type="primary"/></button>
                {children}
            </div>
        </>,
        document.querySelector("#modals")
    );
};

Modal.propTypes = {
    children: PropTypes.object,
    onClose: PropTypes.func, 
    isOpen: PropTypes.bool, 
};