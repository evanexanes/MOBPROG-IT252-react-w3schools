/*
Program name: vite.config.js
Description: Vite configuration. Enables the React plugin and lets the dev server be opened
   from another device on the same network.
Author: Exanes, Evan Prens
Date Compiled: 11/05/2026
======================================================================
Date           Description                      Programmer name
======================================================================
11/05/2026     Initial Implementation           EPPE
11/09/2026     Added header and comments        EPPE
======================================================================
*/

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on the local network, not only localhost, so a phone can open the dev server.
    host: true,
  },
})
