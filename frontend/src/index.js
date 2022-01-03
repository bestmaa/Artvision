import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';
import {positions ,Provider as ProviderAlert, transitions} from 'react-alert'
import AlertTemp  from 'react-alert-template-basic'

ReactDOM.render(
  <Provider store={store}>
    <ProviderAlert template={AlertTemp} position={positions.BOTTOM_CENTER} timeout={5000} transition={transitions.SCALE}>
    <App />

    </ProviderAlert>
  </Provider>,
  document.getElementById('root')
);

