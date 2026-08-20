import { createRoot } from 'react-dom/client'
import React from "react";
import App from "./App.tsx";
import './styles/tokens.scss';
import './style.css';


createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);