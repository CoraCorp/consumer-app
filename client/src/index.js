import * as firebase from 'firebase';
// import * as firebaseui from 'firebaseui';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: 'AIzaSyCPbdFzMe8efnyAmzIK8Sj0vi2LXUtXvpg',
  authDomain: 'gravaddress-consumer-app.firebaseapp.com',
  databaseURL: 'https://gravaddress-consumer-app.firebaseio.com',
  projectId: 'gravaddress-consumer-app',
  storageBucket: 'gravaddress-consumer-app.appspot.com',
  messagingSenderId: '343734860363',
  appId: '1:343734860363:web:b4781bc6769f554f5cebce',
  measurementId: 'G-06CLBWYYZ1'
};

firebase.initializeApp(firebaseConfig);
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#root', {
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID
//   ]
// });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
