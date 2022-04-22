import React, { useCallback, useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import './App.css';
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
    api.getInitialCards()
        .then((ingredientsInfo) => {
          setIngredientsList(ingredientsInfo.data);
          setIsSubmitting(true)
        })
        .catch((err) => {
          console.log(`Внимание! ${err}`);
      }) 
}, []);


// обработчик для popup ингредиента
const handleCardClick = (data) => {
  setIsIngredientPopupOpen(true)
  setSelectedCard(data);
}

const handleAddOrder = useCallback(() => {
  setIsOrderPopupOpen(true)
}, []);


// закрытие всех popup
const closeAllPopups = useCallback(() => {
  setIsOrderPopupOpen(false);
  setIsIngredientPopupOpen(false)
}, []);

/*// обработчики закрытия
function handleClosePopup(evt) {
  if (
      evt.target.classList.contains('popup')
      || evt.target.classList.contains('popup__close-icon')
  ) {
      closeAllPopups();
  }
}*/

useEffect(() => {
  function handleEscClose(evt) {
      if (evt.keyCode === 27) closeAllPopups();
  }

  document.addEventListener('keydown', handleEscClose);

  return () => document.removeEventListener('keydown', handleEscClose);
}, []);



  return (
    <div className="App">
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
        onClose={closeAllPopups}
      />
      <IngredientDetails
        card={selectedCard}
        isOpen={isIngredientPopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

