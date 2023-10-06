import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { Router } from './Router/Router';

const queryMovie = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
    <Router/>
    </QueryClientProvider>
  </React.StrictMode>
);


