import React from 'react';
import AddressForm from './components/AddressForm';
import Auth from './components/Auth';
import { useAuth } from './utils/auth';

function App() {
  const { user, signOut } = useAuth();
  function handleSignOutClick() {
    signOut();
  }
  return (
    <div>
      {user ? (
        <div>
          <div>
            <button onClick={handleSignOutClick}>Sign Out</button>
          </div>
          <AddressForm />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
