import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import NavigationApp from './NavigationApp.js';
import store from './Store.js';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<NavigationApp />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
