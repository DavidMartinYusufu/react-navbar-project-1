import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
registerServiceWorker();

applyPolyfills().then(() => {
     defineCustomElements(window);
});
