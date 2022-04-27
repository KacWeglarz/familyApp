import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
    <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const h2element = document.createElement("h2")
document.body.appendChild(h2element)
h2element.className = "nav"
h2element.style = "color: red; background-color: blue; height: 60px; width: 100%;"
console.dir(h2element)



