import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom"
// FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'
// NORMALIZE CSS, RESET BROWSER DEFAULT CSS
import 'normalize.css';
// GLOBAL CSS NIT
import 'assets/styles/main.scss'
// STORE
import rootReducer from 'store/main-store';

// STORE INIT USING THUNK AS MIDDLEWARE
const store = createStore(rootReducer, applyMiddleware(thunk));

// FONT AWESOME INIT
library.add(fab, faSearch, faUserCircle)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
, document.getElementById('root'));
