import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter , Route} from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const routes = (
    <BrowserRouter>
    </BrowserRouter>
);
ReactDOM.render(<routes />, document.getElementById('root'));
registerServiceWorker();
