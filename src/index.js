import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crear la raíz
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
