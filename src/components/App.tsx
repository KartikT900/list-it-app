import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App(): JSX.Element {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <div>
      <button
        onClick={() => {
          (async () => {
            await loginWithRedirect();
          })();
        }}
      >
        Login
      </button>
      {isAuthenticated && <span>{user?.email}</span>}
    </div>
  );
}

export default App;
