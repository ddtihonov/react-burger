import React, { useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import {AppHeader} from '../AppHeader/AppHeader';
import app from './App.module.css';
import {OrderDetails} from '../OrderDetails/OrderDetails';
import {IngredientDetails} from '../IngredientDetails/IngredientDetails';
import {Modal} from '../Modal/Modal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {Preloader} from '../Preloader/Preolader';
import { 
  Login, 
  Register, 
  PageNotFound, 
  Main, 
  Profile, 
  ForgotPassword,
  ResetPassword,
  Ingredient,
  Orders,
} from '../../pages';
import {
  DELETE_ORDER_NUMBER, 
  DELETE_SELECTED_INGREDIENT, 
  CLEAR_INGREDIENT_ORDER,
  INGREDIENT_WINDOW_CLOSE,
} from '../../services/actions/actions';
import {onGetUserInfo} from '../../services/actions/userInfo';
import {onRefreshToken} from '../../services/actions/refreshToken';
import {onGetIngredients} from '../../services/actions/actions';

export const App = () =>{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 
  let background = location.state && location.state.background

  const orderNumber = useSelector(state => state.orderState.orderNumber);
  const loading  = useSelector(state => state.authData.loading);

  useEffect(() => {
    dispatch(onGetIngredients());
  }, [dispatch]);  

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
  localStorage.removeItem('ingredientItem');
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
            <Route  path='/register'  element={
                      <Register/>
                  } />               
            <Route  path='/profile'  element={
                  <ProtectedRoute>
                      <Profile/>
                  </ProtectedRoute>       
                  } />
            <Route  path='/profile/orders'  element={
                  <ProtectedRoute>
                      <Orders/>
                  </ProtectedRoute>       
                  } />       
            <Route  path='/forgot-password'  element={
                      <ForgotPassword/>
                  } />
            <Route  path='/reset-password'  element={
                      <ResetPassword/>
                  } />
            
            {background  &&
              <Route  path='/ingredients/:id'  element={
                <Modal 
                onClose={handleIngredientClose}
                title="Детали ингредиента"
                >
                <IngredientDetails/>
              </Modal>
            } />}
            <Route  path='/ingredients/:id'  element={
              <Ingredient/>
            } />                                        
          </Routes>
        
      {orderNumber && 
      <Modal onClose={handleOrderClose}>
      <OrderDetails/>
      </Modal>
      }
      {loading &&
        <Preloader/>
      }
    </div>
  );
};