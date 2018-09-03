import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import NavigationApp from './NavigationApp.js';
import store from './Store.js';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
	<Provider store={store}>
	  <HashRouter>
			<NavigationApp />
  	</HashRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
