import React from 'react';
import order_detals from './OrderDetails.module.css';
import Modal from '../Modal/Modal';
import icon from '../../image/icon.svg';
import PropTypes from "prop-types";


export default function OrderDetails({isOpen, onClose}) {


    return(
        <Modal  isOpen={isOpen} onClose={onClose}>
            <div className={order_detals.box} >
                <h2 className={order_detals.title}>070876</h2>
                <h3 className={order_detals.subtitle}>идентификатор заказа</h3>
                <img src={icon} alt="Иконка"/>
                <p className={order_detals.text}>Ваш заказ начали готовить</p>
                <p className={order_detals.text_purple}>Дождитесь готовности на орбитальной станции</p>
            
            </div>
        </Modal>
    
    );
};

OrderDetails.propTypes = {
    onClose: PropTypes.func, 
    isOpen: PropTypes.bool, 
};