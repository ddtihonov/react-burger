import React, { useState, useEffect } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import './App.css';
import {arrayInitialization} from '../../utils/data'

export default function App() {

  const[array, setArray] = useState([arrayInitialization])

  return (
    <div className="App">
      <AppHeader/>
      <Main/>
    </div>
  );
}

