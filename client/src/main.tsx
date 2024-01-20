import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import Store from '@/app/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/hooks/useThemeMode.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
