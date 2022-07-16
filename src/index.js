import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app';
import store from './store';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
