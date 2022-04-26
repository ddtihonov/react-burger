import React, { useCallback, useState, useEffect, useContext } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import app from './App.module.css';
import api from '../../utils/IngredientsApi';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { BurgerContext } from '../../utils/BurgerContext';


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

  return (
    <BurgerContext.Provider value={ingredientsList}>
    <div className={app.page}>
      <AppHeader/>
      {isSubmitting &&
        <Main
        onAddOrder={handleAddOrder}
        onCardClick={handleCardClick}
        />
      }
      {isOrderPopupOpen && 
      <Modal
      isOpen={isIngredientPopupOpen}
      onClose={closeAllPopups}
      >
      <OrderDetails
        isOpen={isOrderPopupOpen}
        onClose={closeAllPopups}
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
    </BurgerContext.Provider>
  );
};