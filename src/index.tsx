import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/style.css';

const main = () => {
  const rootElement = document.createElement('main');
  rootElement.id = 'root-element';
  document.body.appendChild(rootElement);
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

window.addEventListener('load', main);
