import React, { useCallback, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import app from './App.module.css';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { 
  Login, 
  Register, 
  PageNotFound, 
  Main, 
  Profile, 
  ForgotPassword,
  ResetPassword
} from '../../pages';
import {
  DELETE_ORDER_NUMBER, 
  DELETE_SELECTED_INGREDIENT, 
  CLEAR_INGREDIENT_ORDER} from '../../services/actions/actions';

export default function App() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const orderNumber = useSelector(state => state.orderState.orderNumber);
  const ingredient = useSelector(state => state.ingredientState.selectedIngredient);

  const [loggedIn, setLoggedIn] = useState(false);

  const state = useSelector(state => state);
console.log(state)

  useEffect(() => {
   
}, [])

const handleOrderClose = useCallback(() => {
  dispatch({
    type: DELETE_ORDER_NUMBER,
  });
  
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
      <Routes>
        <Route  path='/'  element={
                  <Main/>
              } />   
        <Route path='*' element={
                  <PageNotFound />
              }/>
        <Route  path='/login'  element={
                  <Login/>
              } />          
        <Route  path='/profile'  element={
              <ProtectedRoute loggedIn={loggedIn}>
                  <Profile/>
              </ProtectedRoute>       
              } /> 
        <Route  path='/register'  element={
                  <Register/>
              } /> 
        <Route  path='/forgot-password'  element={
                  <ForgotPassword/>
              } />
        <Route  path='/reset-password'  element={
                  <ResetPassword/>
              } />                              
        </Routes>
        
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