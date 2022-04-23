import React, { useCallback, useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import app from './App.module.css';
import api from '../../utils/IngredientsApi';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';


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
        onClose={closeAllPopups}
      />
      <IngredientDetails
        card={selectedCard}
        isOpen={isIngredientPopupOpen}
        onClose={closeAllPopups}
      />
    </div>
    
  );
};

/*<Modal
        isOpen={isIngredientPopupOpen}
        onClose={closeAllPopups}
      >
        <IngredientDetails
        card={selectedCard}
        onClose={closeAllPopups}
        />
      </Modal>*/


/*<OrderDetails
        isOpen={isOrderPopupOpen}
        onClose={closeAllPopups}
      />
      <IngredientDetails
        card={selectedCard}
        isOpen={isIngredientPopupOpen}
        onClose={closeAllPopups}
      />*/
