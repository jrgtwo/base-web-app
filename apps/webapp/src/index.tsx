
import React from 'react';

import { createRoot } from 'react-dom/client';
import { App } from './app/index';

window.addEventListener("DOMContentLoaded", function (event) {
  // @ts-expect-error
  createRoot(document.getElementById("app")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

