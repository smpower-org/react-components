import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {closeNavigation} from '../actions.js';

import './style.css';


const navLinks = [
  {
	  exact: true,
		to: '/',
		replace: true,
		text: 'Home'
	},
	{
	  to: '/about',
		replace: true,
		text: 'About'
	},
	{
	  to: '/topic',
		replace: true,
		text: 'Topic'
	}
];

const Navigation = ({navigationState, onClickCloseMenu}) => (
	<div className={navigationState ? 'navigation active' : 'navigation'}>
		<div className="navigation-item navigation-menu">
			<i
				className="navigation-menu-close" 
				onClick={onClickCloseMenu}
			>
			</i>
		</div>
	  {
		  navLinks.map((navLink, index) => {
			  return (
				  <div key={index} className="navigation-item">
					  <span className="navigation-item-text">
					    <NavLink
					      exact={navLink.exact}
					      to={navLink.to}
					      replace={navLink.replace}
					      onClick={onClickCloseMenu}
					    >{navLink.text}</NavLink>
					  </span>
					</div>
				);
			})
		}
	</div>
);

Navigation.propTypes = {
  navigationState: PropTypes.bool.isRequired,
	onClickCloseMenu: PropTypes.func.isRequired
};


class NavigationContainer extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClickCloseMenu = this.onClickCloseMenu.bind(this);

		this.state = this.getOwnState();
	}

	getOwnState() {
	  return {
		  navigation: this.context.store.getState().navigation
		};
	}

	onChange() {
	  this.setState(this.getOwnState());
	}

	onClickCloseMenu() {
		this.context.store.dispatch(closeNavigation());
	}

	shouldComponentUpdate(nextState, nextProps) {
		return this.state.navigation.open !== nextProps.navigation.open;
	}

	componentDidMount() {
		this.setState({
		  unsubscribe: this.context.store.subscribe(this.onChange)
		});
	}

	componentWillUnmount() {
		this.state.unsubscribe(this.onChange);
	}

  render() {
		const state = this.state.navigation.open;

	  return (
			<Navigation
			  navigationState={state}
			  onClickCloseMenu={this.onClickCloseMenu}
			/>
		);
	}
}

NavigationContainer.contextTypes = {
  store: PropTypes.object
};

export default NavigationContainer;
