import React, { useCallback, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import app from './App.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import {DELETE_ORDER_NUMBER} from '../../services/actions/actions'

export default function App() {

  const dispatch = useDispatch();

  const orderNumber = useSelector(state => state.orderState.orderNumber);
  console.log(orderNumber)

// данные для popup ингредиента
  const [selectedCard, setSelectedCard] = useState({}); 

  ///ссстояния popup
  const [isIngredientPopupOpen, setIsIngredientPopupOpen] = useState(false);

// обработчик для popup ингредиента
const handleCardClick = useCallback((data) => {
  setIsIngredientPopupOpen(true);
  setSelectedCard(data);
}, []);

// закрытие всех popup
const closeAllPopups = useCallback(() => {
  setIsIngredientPopupOpen(false);
}, []);

const handleOrderClose = useCallback(() => {
  dispatch({
    type: DELETE_ORDER_NUMBER,
  });
}, [dispatch]);


  return (
    <div className={app.page}>
      <AppHeader/>
        <Main onCardClick={handleCardClick}/>
      {orderNumber && 
      <Modal onClose={handleOrderClose}>
      <OrderDetails/>
      </Modal>
      }
      {isIngredientPopupOpen && 
      <Modal
      isOpen={isIngredientPopupOpen}
      onClose={closeAllPopups}
      >
      <IngredientDetails
      card={selectedCard}
      onClose={closeAllPopups}
      />
    </Modal>
      }
    </div>
  );
};