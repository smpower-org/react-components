import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import {view as Love} from '../../love/';
import {view as Marriage} from '../../marriage/';

import './style.css';


const navLinks = [
	{
	  to: 'love',
		text: '爱情'
	},
	{
    to: 'marriage',
    text: '婚姻'
	}
];

const routes = [
	{
	  path: 'love',
		component: Love
	},
	{
	  path: 'marriage',
		component: Marriage
	}
];

const Default = () => (
	<div className="main-topic-content">Please select a topic to render.</div>
);

class Topic extends React.Component {
  render() {
	  const {location, match} = this.props;

		if (match.url === location.pathname) {
			return (
				<div className="main-topic">
					<div className="main-topic-links">
						{
							navLinks.map((navLinkItem, navLinkIndex) => {
								return (
									<NavLink
										key={navLinkIndex}
										to={`${match.url}/${navLinkItem.to}`}
									>{navLinkItem.text}</NavLink>
								);
							})
						}
					</div>
					<Default />
				</div>
			);
		}

		return (
			<div className="main-topic">
				<div className="main-topic-links">
					{
						navLinks.map((navLinkItem, navLinkIndex) => {
							return (
								<NavLink
									key={navLinkIndex}
									to={`${match.url}/${navLinkItem.to}`}
								>{navLinkItem.text}</NavLink>
							);
						})
					}
				</div>
				<div className="main-topic-content">
					{
						routes.map((routeItem, routeIndex) => {
							return (
								<Route 
									key={routeIndex}
									path={`${match.url}/${routeItem.path}`}
									component={routeItem.component}
								/>
							);
						})
					}
				</div>
			</div>
		);
	}
};

export default Topic;
