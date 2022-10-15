import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from 'components/App';

import mockServer from './server';

if (process.env.NODE_ENV !== 'production') {
  void mockServer.start();
}

const rootElement: HTMLElement =
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Auth0Provider
    clientId={process.env.AUTH0_CLIENTID ?? ''}
    domain={process.env.AUTH0_DOMAIN ?? ''}
    redirectUri="http://localhost:8000/list"
  >
    <App />
  </Auth0Provider>
);
