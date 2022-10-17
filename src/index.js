import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';

import './i18n';
import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
    <App />
);