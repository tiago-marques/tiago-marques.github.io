import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Page from './containers/Page';
import registerServiceWorker from './registerServiceWorker';

import 'whatwg-fetch'

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
