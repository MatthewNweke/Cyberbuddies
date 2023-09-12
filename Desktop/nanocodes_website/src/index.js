import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import './index.css';

const fetcher = async (...args) => {
  const res = await axios(...args);
  return res.data;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <SWRConfig value={{ fetcher }}>
        <App />
      </SWRConfig>
      <Toaster />
    </UserContextProvider>
  </React.StrictMode>
);
