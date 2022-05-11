import React, { useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import app from './App.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import {DELETE_ORDER_NUMBER, DELETE_SELECTED_INGREDIENT, CLEAR_INGREDIENT_ORDER} from '../../services/actions/actions'

export default function App() {

  const dispatch = useDispatch();

  const orderNumber = useSelector(state => state.orderState.orderNumber);
  const ingredient = useSelector(state => state.ingredientState.selectedIngredient);

const handleOrderClose = useCallback(() => {
  dispatch({
    type: DELETE_ORDER_NUMBER,
  });
//пока не работает
  dispatch({type: CLEAR_INGREDIENT_ORDER});
}, [dispatch]);

const handleIngredientClose = useCallback(() => {
  dispatch({
    type: DELETE_SELECTED_INGREDIENT,
  });
}, [dispatch]);


  return (
    <div className={app.page}>
      <AppHeader/>
        <Main/>
      {orderNumber && 
      <Modal onClose={handleOrderClose}>
      <OrderDetails/>
      </Modal>
      }
      {ingredient && 
      <Modal 
      onClose={handleIngredientClose}
      title="Детали ингредиента"
      >
      <IngredientDetails/>
    </Modal>
      }
    </div>
  );
};