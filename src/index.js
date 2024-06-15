import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Axios from 'axios';

Axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", { withCredentials: true })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
