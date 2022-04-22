import React from 'react';
import modal_overlay from './ModalOverlay.module.css';
import PropTypes from "prop-types";

export default function ModalOverlay({children, onClose, isOpen}) {

    return(
        <section id='popup' className={`${modal_overlay.popup} ${isOpen ? modal_overlay.popup_opened : modal_overlay.popup }`}  onClick={onClose}>
            {children}
        </section>
    
    );
};

ModalOverlay.propTypes = {
    children: PropTypes.object,
    onClose: PropTypes.func, 
    isOpen: PropTypes.bool, 
};