import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App(): JSX.Element {
  const { loginWithRedirect } = useAuth0();

  // eslint-disable-next-line no-console
  console.log(process.env);
  // eslint-disable-next-line no-console
  console.log(process.env.AUTH0_CLIENTID, process.env.AUTH0_DOMAIN);

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
