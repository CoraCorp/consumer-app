import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const fbRef = useRef();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start(`#${fbRef.current.id}`, {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          localStorage.setItem('user', JSON.stringify(authResult));
          return true;
        }
      },
      signInSuccessUrl: 'http://localhost:3000'
    });
  });

  useEffect(() => {
    let authResult = JSON.parse(window.localStorage.getItem('user'));
    console.log('render', authResult);
    function cb() {
      authResult = JSON.parse(window.localStorage.getItem('user'));
      console.log('event', authResult);
    }
    window.addEventListener('storage', cb);
    if (
      authResult &&
      authResult.user &&
      authResult.user.stsTokenManager &&
      authResult.user.stsTokenManager.accessToken
    ) {
      fetch('http://localhost:8080', {
        headers: {
          Authorization: `Bearer ${authResult.user.stsTokenManager.accessToken}`
        }
      })
        .then(res => res.text())
        .then(text => console.log(text));
    }
    return () => {
      window.removeEventListener('storage', cb);
    };
  });
  return (
    <div>
      App<div id="firebase-mount" ref={fbRef}></div>
      <div>{user && JSON.stringify(user)}</div>
    </div>
  );
}

export default App;
