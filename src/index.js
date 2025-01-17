import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './components/MyList';
import reportWebVitals from './reportWebVitals';

const toDos = ["Follow up on E-mails", "Return text messages", "Sleep", "Actually verify my address with the library, instead of signing up for a temp card every month", "Play Jenga"]

ReactDOM.render(
  <React.StrictMode>
    <MyList toDos = {toDos} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
