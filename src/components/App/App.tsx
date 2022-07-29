import React, { useCallback, useEffect, FC} from 'react';
import { useDispatch, useSelector } from '../../utils/hooks';
import { Route, Routes, useNavigate, useLocation, Location} from 'react-router-dom';
import {AppHeader} from '../AppHeader/AppHeader';
import app from './App.module.css';
import {OrderDetails} from '../OrderDetails/OrderDetails';
import {IngredientDetails} from '../IngredientDetails/IngredientDetails';
import {Modal} from '../Modal/Modal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {Preloader} from '../Preloader/Preolader';
import { PreloaderOrder } from '../PreloaderOrder/PreoladerOrder';
import { FeedOrder } from '../FeedOrder/FeedOrder';
import { UserOrder } from '../UserOrder/UserOrder';
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
  Feed,
} from '../../pages';
import {
  CLEAR_INGREDIENT_ORDER,
} from '../../services/actions/burgerConstructor';

import {
  DELETE_SELECTED_INGREDIENT,
  INGREDIENT_WINDOW_CLOSE,
} from '../../services/actions/actions';

import {onGetUserInfo} from '../../services/actions/userInfo';
import {onRefreshToken} from '../../services/actions/refreshToken';
import {onGetIngredients} from '../../services/actions/ingredients';
import {IBackgroundState} from '../../utils/tupes';

import {ORDER_WINDOW_CLOSE} from '../../services/actions/selectedOrder';
import {getCloseOrderModalAction} from '../../services/actions/modal';
import { getDeleteOrderNumberAction } from '../../services/actions/order'


// Сделав проверку мы говорим TS что мы программно убедились что у location.state есть background
function isBackgroundLocation(location: Location): location is Location & IBackgroundState {
  return (
    typeof location.state === 'object' &&
    location.state !== null &&
    'background' in location.state
  );
}
export const App: FC = () =>{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let background = null
  
  if (isBackgroundLocation(location)) {
    background = location.state.background
  }

  const loading  = useSelector((state) => state.authData.loading);
  const orderSuccess = useSelector((state) => state.orderState.orderSuccess);
  const loadingOrderNumber = useSelector((state) => state.modalState.isModalOpen);
  const loadingOrder = useSelector((state) => state.orderDetals.orderWindowOpen);
  const loggedIn = useSelector((state) => state.authData.loggedIn); 

  useEffect(() => {
    dispatch(onGetIngredients());
  }, [dispatch]);

  useEffect(() => {
    if(orderSuccess){
      dispatch(getCloseOrderModalAction())
    }
  }, [dispatch, orderSuccess]);

useEffect(() => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  if (refreshToken) {
      dispatch(onRefreshToken(refreshToken));
      dispatch(onGetUserInfo(accessToken));
  }
}, [dispatch, navigate]);

const handleOrderClose = useCallback(() => {
  dispatch({type: CLEAR_INGREDIENT_ORDER});
  dispatch(getDeleteOrderNumberAction());
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

const handleFeedClose = useCallback(() => {
  navigate('/feed')
  dispatch({ type: ORDER_WINDOW_CLOSE})
}, [dispatch, navigate]);

const handleOrdersClose = useCallback(() => {
  navigate('/profile/orders')
  dispatch({ type: ORDER_WINDOW_CLOSE})
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
            <Route  path='/feed'  element={
                      <Feed/>
                  } />     
            {background  &&
              <Route  path='/ingredients/:id'  element={
                <Modal
                onClose={handleIngredientClose}
                title="Детали ингредиента"
                >
                <IngredientDetails/>
              </Modal>
              }/>}
            {background  &&
              <Route  path='/feed/:id'  element={
                <Modal
                onClose={handleFeedClose}
                >
                <FeedOrder/>  
              </Modal>
              }/> }
            {background  &&
              <Route  path='/profile/orders/:id'  element={
                <Modal
                  onClose={handleOrdersClose}
                >
                  <UserOrder/> 
                </Modal>
              }/> }  
            <Route  path='/ingredients/:id'  element={
              <Ingredient/>
            } />
            <Route  path='/feed/:id'  element={
              <FeedOrder/> 
            } />
            <Route  path='/profile/orders/:id'  element={
              <UserOrder/> 
            } />
          </Routes>

      {orderSuccess && 
        <Modal onClose={handleOrderClose}>
          <OrderDetails/>
      </Modal>
      }
      {loading  &&
        <Preloader/>
      }
      {loggedIn && loadingOrderNumber &&
        <PreloaderOrder/>
      }
    </div>
  );
};