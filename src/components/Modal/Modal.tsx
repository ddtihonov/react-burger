import React, { useEffect, useState} from 'react';
import { createPortal } from "react-dom";
import modal from './Modal.module.css';
import {ModalOverlay} from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {TModal} from '../../utils/tupes';

export const Modal = ({children, onClose, title}: TModal) => {

    const [interval, setInterval] = useState<boolean>(false)
    const modalRoot = document.getElementById("modals") as HTMLElement;
    

    useEffect(() => {
        const handleEscClose = (evt: KeyboardEvent) =>{
            if (evt.key ==='Escape')  onClose();
        }
        document.addEventListener('keydown', handleEscClose);
        return () => document.removeEventListener('keydown', handleEscClose);
    }, [onClose]);

    useEffect(() => {
        setTimeout(() => {
            setInterval(true)
    },
        500)
    }, []);

    

    

    return createPortal (
        <ModalOverlay onClick={onClose}>
            {children?
            (<div className={modal.box} onClick={evt => evt.stopPropagation()}>
                {title && (<h2 className={modal.title}>{title}</h2>)}
                {interval && <button data-test="close-button" className={modal.close_icon} type="button" aria-label="закрыть" onClick={onClose}>
                    <CloseIcon type="primary"/></button>}
                {children}
            </div>) : null}
        </ModalOverlay>
        ,modalRoot
    );
};