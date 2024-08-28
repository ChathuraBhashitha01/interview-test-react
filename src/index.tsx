import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';
import postReducer from "./state/post/PostSlice"
import postSaga from "./sagas/PostSaga";


const saga=createSagaMiddleware();
const store= configureStore({
    reducer : {
        posts:postReducer
    },
    middleware:[saga],
});

saga.run(postSaga)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

reportWebVitals();
