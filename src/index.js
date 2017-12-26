import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/store';
import { getNotes } from './store/actions';

import registerServiceWorker from './registerServiceWorker';

/** in this file you have to make sure that once your application runs it is
* able to find your store and leverage that to apply to your app
*/

//create a store variable
const store = configureStore();

//dispatching the 1st action; When the application runs this is how we call an action:
store.dispatch(getNotes());


ReactDOM.render(
  //leverage the container provider when the app runs:
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
