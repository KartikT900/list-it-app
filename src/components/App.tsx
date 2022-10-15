import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App(): JSX.Element {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button
        onClick={
          /* istanbul ignore next */
          () => {
            (async () => {
              await loginWithRedirect();
            })();
          }
        }
      >
        Login
      </button>
    </div>
  );
}

export default App;
