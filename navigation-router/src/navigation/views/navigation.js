import React from 'react';
import PropTypes from 'prop-types';
import {closeNavigation} from '../actions.js';

import './style.css';


const Navigation = ({navigationState, onClickCloseMenu}) => (
	<div className={navigationState ? 'navigation active' : 'navigation'}>
		<div className="navigation-item navigation-menu">
			<i
				className="navigation-menu-close" 
				onClick={onClickCloseMenu}
			>
			</i>
		</div>
		<div className="navigation-item">
			<span className="navigation-item-text">Item 01</span>
		</div>
		<div className="navigation-item">
			<span className="navigation-item-text">Item 02</span>
		</div>
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
