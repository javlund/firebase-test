import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, compose } from 'redux'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import { Provider } from 'react-redux';

import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyArcna8CNA3aEPeCrjw6Oo6yK1AIM2V_-M",
    authDomain: "testapp-d3bf9.firebaseapp.com",
    databaseURL: "https://testapp-d3bf9.firebaseio.com",
    projectId: "testapp-d3bf9",
    storageBucket: "testapp-d3bf9.appspot.com",
    messagingSenderId: "733362946806"
  };
firebase.initializeApp(config);
firebase.firestore();

const createStoreWithFirebase = compose(reduxFirestore(firebase))(createStore);
const rootReducer = combineReducers({firestore: firestoreReducer});
const store = createStoreWithFirebase(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
