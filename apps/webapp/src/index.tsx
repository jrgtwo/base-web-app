
import React from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
console.log('test');

// Render your React component instead
// @ts-expect-error
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world! </h1>);