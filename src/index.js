import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'tailwindcss/tailwind.css';

// if (!localStorage.getItem("shopCart")) {
//   localStorage.setItem("shopCart", JSON.stringify([]))
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
