import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Axios from 'axios';
// import { useEffect } from 'react';

try {
  await Axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", { withCredentials: true })
} catch (error) {
  console.log(error.toJSON().message);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
