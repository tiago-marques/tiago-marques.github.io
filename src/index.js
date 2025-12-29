import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import Page from './containers/Page';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

