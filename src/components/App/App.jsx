import React, { useCallback, useState} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import app from './App.module.css';
import api from '../../utils/IngredientsApi';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';

export default function App() {

// данные для popup ингредиента
  const [selectedCard, setSelectedCard] = useState({}); 

  ///ссстояния popup
  const [isIngredientPopupOpen, setIsIngredientPopupOpen] = useState(false);
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);

  //номер заказа
  const [orderNumber, setIsOrderNumber] = useState();


// обработчик для popup ингредиента
const handleCardClick = useCallback((data) => {
  setIsIngredientPopupOpen(true);
  setSelectedCard(data);
}, []);

const handleAddOrder = useCallback((arr) => {
  api.useIngredients(arr)
  .then((data) => {
    setIsOrderNumber(data.order.number)
    setIsOrderPopupOpen(true)
  })
  .catch((err) => {
    console.log(`Внимание! ${err}`);
}) 
}, []);


// закрытие всех popup
const closeAllPopups = useCallback(() => {
  setIsOrderPopupOpen(false);
  setIsIngredientPopupOpen(false);
}, []);


  return (
    <div className={app.page}>
      <AppHeader/>
        <Main
        onAddOrder={handleAddOrder}
        onCardClick={handleCardClick}
        />
      {isOrderPopupOpen && 
      <Modal
      isOpen={isIngredientPopupOpen}
      onClose={closeAllPopups}
      >
      <OrderDetails
        isOpen={isOrderPopupOpen}
        onClose={closeAllPopups}
        orderNumber={orderNumber}
      />
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