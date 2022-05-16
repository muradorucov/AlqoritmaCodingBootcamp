import React from 'react';

import ReactDOM from 'react-dom/client';

import Toggle from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
        <Toggle />
    </React.StrictMode>
);

reportWebVitals();