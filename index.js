import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import Counter from "./Components/Counter";
import Mortgage from "./Components/Mortgage";

const node = document.querySelector('#root');
ReactDOM.render(<Mortgage />, node);