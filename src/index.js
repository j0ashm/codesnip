import { ColorModeScript } from '@chakra-ui/color-mode';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMod='dark' />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
