import React, { useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate} from 'react-router-dom';
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
  ResetPassword,
  Ingredient,
} from '../../pages';
import {
  DELETE_ORDER_NUMBER, 
  DELETE_SELECTED_INGREDIENT, 
  CLEAR_INGREDIENT_ORDER,
  INGREDIENT_WINDOW_CLOSE,
} from '../../services/actions/actions';
import {onGetUserInfo} from '../../services/actions/userInfo';
import {onRefreshToken} from '../../services/actions/refreshToken';

export default function App() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const orderNumber = useSelector(state => state.orderState.orderNumber);
  const ingredient = useSelector(state => state.ingredientState.selectedIngredient);
  const loggedIn = useSelector(state => state.authData.loggedIn);
  const ingredientWindowOpen = useSelector(state => state.ingredientState.ingredientWindowOpen);
  //const state = useSelector(state => state);
  //console.log(state)
  useEffect(() => {
   
}, [])

useEffect(() => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  if (refreshToken) {
      dispatch(onRefreshToken(refreshToken));
      dispatch(onGetUserInfo(accessToken));
  }
}, [dispatch, navigate]);

const handleOrderClose = useCallback(() => {
  dispatch({
    type: DELETE_ORDER_NUMBER,
  });
  
  dispatch({type: CLEAR_INGREDIENT_ORDER});
}, [dispatch]);

const handleIngredientClose = useCallback(() => {
  navigate('/')
  dispatch({
    type: DELETE_SELECTED_INGREDIENT,
  });
  dispatch({
    type: INGREDIENT_WINDOW_CLOSE,
  });

}, [dispatch, navigate]);


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
        {!loggedIn &&<Route  path='/register'  element={
                  <Register/>
              } />}                
        <Route  path='/profile'  element={
              <ProtectedRoute loggedIn={loggedIn}>
                  <Profile/>
              </ProtectedRoute>       
              } /> 
        <Route  path='/forgot-password'  element={
                  <ForgotPassword/>
              } />
        <Route  path='/reset-password'  element={
                  <ResetPassword/>
              } />
        <Route  path='/ingredients/:id'  element={
                <Ingredient/>
            } />   
        <Route  path='/ingredients/:id'  element={
                
                  <Ingredient/>
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

      {ingredientWindowOpen}
    </div>
  );
};