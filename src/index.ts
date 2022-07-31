import * as ReactDOM from 'react-dom/client';

import App from 'components/App';

const rootElement: HTMLElement =
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById('root')!;

const root = ReactDOM.createRoot(rootElement);

root.render(App());
