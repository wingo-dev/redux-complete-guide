import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider} from '@mantine/core';

import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        colors: {
          // Add your color
          deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0'],
          // or replace default theme color
          blue: ['#E9EDFC', '#C1CCF6', '#99ABF0'],
        },

        shadows: {
          md: '1px 1px 3px rgba(0, 0, 0, .25)',
          xl: '5px 5px 3px rgba(0, 0, 0, .25)',
        },

        headings: {
          fontFamily: 'Roboto, sans-serif',
          sizes: {
            h1: { fontSize: '2rem' },
          },
        },
      }}
    >
        <App />
    </MantineProvider>
    </Provider>
    
);
