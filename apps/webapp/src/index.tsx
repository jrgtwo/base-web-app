
import React from 'react';

import { createRoot } from 'react-dom/client';
import { App } from './app/index';

window.addEventListener("DOMContentLoaded", function (event) {
  const appRoot = document.getElementById("app");
  appRoot
    ? createRoot(appRoot).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>)
    : null;
});

