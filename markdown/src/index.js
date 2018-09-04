import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MarkdownApp from './MarkdownApp.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MarkdownApp />, document.getElementById('root'));
registerServiceWorker();
