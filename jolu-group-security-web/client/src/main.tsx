import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// ✅ Set dark mode before app renders to avoid flicker
const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Jolu-Security-Website">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
