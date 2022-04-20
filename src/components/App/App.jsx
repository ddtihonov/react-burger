import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import './App.css';
import api from '../../utils/IngredientsApi';


export default function App() {

  const [ingredientsList, setIngredientsList] = useState([]);

  // Эффект запроса карточек
  useEffect(() => {
    api.getInitialCards()
        .then((ingredientsInfo) => {
          setIngredientsList(ingredientsInfo.data);
        })
        .catch((err) => {
          console.log(`Внимание! ${err}`);
      }) 
}, []);


  return (
    <div className="App">
      <AppHeader/>
      <Main
        arrayInitialization={ingredientsList}
      />
    </div>
  );
}

