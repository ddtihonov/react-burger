import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../storage/index';
import { WS_URL } from '../../utils/constants';
import { socketMiddleware } from '../middleware/middleware';
import {
    WS_SEND_ORDERS,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_START,
    WS_GET_ORDERS,
    WS_CONNECTION_START_FOR_USER,
    WS_GET_USER_ORDERS,
} from '../actions/wsOrders';

const wsActions = {
    wsInit: WS_CONNECTION_START,
    wsUserInit: WS_CONNECTION_START_FOR_USER,
    wsUserOrder: WS_GET_USER_ORDERS,
    wsSendMessage: WS_SEND_ORDERS,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_ORDERS,
};

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
        applyMiddleware(thunk, socketMiddleware(WS_URL, wsActions))
    );    

const store = createStore(rootReducer, enhancer);

export { store }