import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import CardList from './CardList';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import "tachyons";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App />
  </React.StrictMode>
);

//ReactDOM.render(<Hello />, document.getElementById("root"));

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
 //<React.StrictMode>
   //<CardList robots = {robots} />
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
