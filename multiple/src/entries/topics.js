import React from 'react';
import ReactDOM from 'react-dom';
import {view as Topics} from '../pages/topics/';
import registerServiceWorker from '../registerServiceWorker';

ReactDOM.render(<Topics />, document.getElementById('root'));
registerServiceWorker();
