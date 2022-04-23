import React, { useCallback, useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import app from './App.module.css';
import api from '../../utils/IngredientsApi';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';


export default function App() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ingredientsList, setIngredientsList] = useState([]);

// данные для popup ингредиента
  const [selectedCard, setSelectedCard] = useState({}); 

  ///ссстояния popup
  const [isIngredientPopupOpen, setIsIngredientPopupOpen] = useState(false);
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);

  // Эффект запроса карточек
  useEffect(() => {
    api.getIngredients()
        .then((ingredientsInfo) => {
          setIngredientsList(ingredientsInfo.data);
          setIsSubmitting(true);
        })
        .catch((err) => {
          console.log(`Внимание! ${err}`);
      }) 
}, []);


// обработчик для popup ингредиента
const handleCardClick = useCallback((data) => {
  setIsIngredientPopupOpen(true);
  setSelectedCard(data);
}, []);

const handleAddOrder = useCallback(() => {
  setIsOrderPopupOpen(true)
}, []);


// закрытие всех popup
const closeAllPopups = useCallback(() => {
  setIsOrderPopupOpen(false);
  setIsIngredientPopupOpen(false);
}, []);

// обработчики закрытия
const handleClosePopup = (evt) => {
  if (
      evt.target.classList.contains('ModalOverlay_popup__5Ankk')
      ||  evt.target.classList.contains('Modal_close_icon__qHygK')
  ) {
      closeAllPopups();
  }
};

useEffect(() => {
  const handleEscClose = (evt) =>{
      if (evt.key ==='Escape') closeAllPopups();
  }

  document.addEventListener('keydown', handleEscClose);

  return () => document.removeEventListener('keydown', handleEscClose);
}, []);



  return (
    <div className={app.page}>
      <AppHeader/>
      {isSubmitting &&
        <Main
        arrayInitialization={ingredientsList}
        onAddOrder={handleAddOrder}
        onCardClick={handleCardClick}
        />
      }
      <OrderDetails
        isOpen={isOrderPopupOpen}
        onClose={handleClosePopup}
      />
      <IngredientDetails
        card={selectedCard}
        isOpen={isIngredientPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

