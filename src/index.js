import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

var destination = document.querySelector('#container')

ReactDOM.render(
    <div>
        <HeaderComponent />
    </div>,
    destination
)
