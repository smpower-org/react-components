import React from 'react';
import {view as Header} from './header/';
import {view as Navigation} from './navigation/';
import {view as Main} from './main/';

const NavigationApp = () => (
  <div>
	  <Header />
	  <Navigation />
	  <Main />
	</div>
);

export default NavigationApp;
