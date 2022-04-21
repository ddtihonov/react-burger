import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import './App.css';
import api from '../../utils/IngredientsApi';
import OrderDetails from '../OrderDetails/OrderDetails';


export default function App() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ingredientsList, setIngredientsList] = useState([]);

  ///ссстояния popup
  const [isIngredientsPopupOpen, setIsIngredientsPopupOpen] = useState(false);
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

function handleAddOrder (){
  setIsOrderPopupOpen(true)
}

// закрытие всех popup
const closeAllPopups = () => {
  setIsOrderPopupOpen(false);
  
}

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
        />
      }
      <OrderDetails
        isOpen={isOrderPopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}
