/*
Program name: main.jsx
Description: Entry point of the app. Mounts the App component into the #root element of
   index.html inside React StrictMode, which adds extra development checks.
Author: Exanes, Evan Prens
Date Compiled: 11/05/2026
======================================================================
Date           Description                      Programmer name
======================================================================
11/05/2026     Initial Implementation           EPPE
11/09/2026     Added header and comments        EPPE
======================================================================
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // global styles from the Vite template
import App from './App.jsx'

// Find the #root div in index.html and render the app inside it.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
