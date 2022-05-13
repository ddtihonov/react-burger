import React from 'react';
import modal_overlay from './ModalOverlay.module.css';
import PropTypes from "prop-types";

export default function ModalOverlay({onClick}) {

    return(
        <section  className={modal_overlay.popup} onClick={onClick} ></section>
    
    );
};

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired, 
};