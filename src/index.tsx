import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from 'components/App';

import mockServer from './server';

if (process.env.NODE_ENV !== 'production') {
  void mockServer.start();
}

const rootElement: HTMLElement =
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
