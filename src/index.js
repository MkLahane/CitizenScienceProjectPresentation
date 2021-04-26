import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SlideIndexProvider } from './contexts/SlideContext';

ReactDOM.render(
  <React.StrictMode>
    <SlideIndexProvider>
      <App />
    </SlideIndexProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


