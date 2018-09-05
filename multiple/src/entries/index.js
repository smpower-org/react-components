import React from 'react';
import ReactDOM from 'react-dom';
import {view as Index} from '../pages/index/';
import registerServiceWorker from '../registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
