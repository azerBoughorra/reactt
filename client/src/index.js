import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux';
import { synchroniseUserState } from './actions/authActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
synchroniseUserState(store.dispatch)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
