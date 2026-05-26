import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Auth0ProviderWrapper } from './providers/Auth0ProviderWrapper.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0ProviderWrapper>
      <App />
    </Auth0ProviderWrapper>
  </StrictMode>,
);
