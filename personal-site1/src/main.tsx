import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
