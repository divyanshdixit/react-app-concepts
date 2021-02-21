import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
// import BrowserRouter from react for client side routing in react using react-router-dom 
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <> 
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>,
  document.getElementById('root')
)