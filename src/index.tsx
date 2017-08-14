import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/header/Header';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
