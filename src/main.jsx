import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import App from './App'
import './index.css'

try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('Failed to find the root element');
  }

  const root = ReactDOM.createRoot(rootElement);

  console.log('Initializing app...');

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );

  console.log('App rendered successfully');

} catch (error) {
  console.error('Failed to initialize app:', error);
}
