import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { TarefasProvider } from './context/TarefasContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TarefasProvider>
      <App />
    </TarefasProvider>
  </React.StrictMode>
);