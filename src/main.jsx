import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx.old';
//import App from './Context/App';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
