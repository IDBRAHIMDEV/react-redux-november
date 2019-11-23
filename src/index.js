import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers/rootReducer';

const initState = {};
const store = createStore(rootReducer, 
                          initState, 
                          composeWithDevTools(applyMiddleware(thunk))
                          );


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

