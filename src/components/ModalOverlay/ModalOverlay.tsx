import React from 'react';
import modal_overlay from './ModalOverlay.module.css';
import {TModalOverlay} from '../../utils/tupes'

export const ModalOverlay = ({onClick, children}: TModalOverlay) => {

    return(
        <section  className={modal_overlay.popup} onClick={onClick} >
            {children}
        </section>
    
    );
};