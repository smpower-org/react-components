import React from 'react';
import {Route} from 'react-router-dom';
import {view as Home} from '../../pages/home/';
import {view as About} from '../../pages/about/';
import {view as Topic} from '../../pages/topic/';

import './style.css';


const routes = [
  {
	  exact: true,
		path: '/',
		component: Home
	},
	{
	  path: '/about',
		component: About
	},
	{
	  path: '/topic',
		component: Topic
	}
];

const Main = () => (
	<div className="main">
	  {
		  routes.map((route, index) => {
			  return (
				  <Route 
					  key={index}
					  exact={route.exact}
					  path={route.path}
					  component={route.component}
					/>
				);
			})
		}
	</div>
);

export default Main;
