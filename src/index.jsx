'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// index.tsx
var App_1 = require('./App'); // Import the default export from App.jsx or App.tsx
var react_1 = require('react');
var client_1 = require('react-dom/client');
client_1.default.createRoot(document.getElementById('root')).render(
  <react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>,
);
