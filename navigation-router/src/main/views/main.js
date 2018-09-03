import React from 'react';
import {Route} from 'react-router-dom';
import {view as Home} from '../../pages/home/';
import {view as About} from '../../pages/about/';
import {view as Topic} from '../../pages/topic/';

import './style.css';


const Main = () => (
	<div className="main">
	  <Route exact path="/" component={Home} />
	  <Route path="/about" component={About} />
	  <Route path="/topic" component={Topic} />
	</div>
);

export default Main;
