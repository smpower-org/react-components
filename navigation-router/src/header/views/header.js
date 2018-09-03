import React from 'react';
import PropTypes from 'prop-types';
import {actions} from '../../navigation/';

import './style.css';


const Header = ({onClickMenu}) => (
	<div className="header">
		<i className="header-menu" onClick={onClickMenu}></i>
	</div>
);

Header.propTypes = {
  onClickMenu: PropTypes.func.isRequired
};


class HeaderContainer extends React.Component {
	constructor(props, context) {
	  super(props, context);

		this.getOwnState = this.getOwnState.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClickMenu = this.onClickMenu.bind(this);

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

	onClickMenu() {
		this.context.store.dispatch(actions.openNavigation());
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
	  return <Header onClickMenu={this.onClickMenu} />;
	}
}

HeaderContainer.contextTypes = {
  store: PropTypes.object
};

export default HeaderContainer;
