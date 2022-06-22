import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {App} from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './services/store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <App />
      </BrowserRouter>  
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();