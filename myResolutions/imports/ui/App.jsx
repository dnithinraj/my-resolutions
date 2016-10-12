import React from 'react';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Resolutions } from '../api/resolutions.js';
import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionsSingle from './ResolutionsSingle.jsx';

export default class App extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				resolutions: Meteor.subscribe("userResolutions")
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.resolutions.stop();
	}

	resolutions() {
		return Resolutions.find({}).fetch();
	}

	render() {		
		return (			
			<ReactCSSTransitionGroup
				component="div"
				className="resolutions"
				transitionName="route"
				transitionEnterCheckout={600}
				transitionAppearCheckout={600}
				transitionLeaveCheckout={400} 
				transitionAppear={true} >
				<h1>My Resolutions</h1>
				<ResolutionsForm />
				<ReactCSSTransitionGroup
					component="ul"
					className="resolutions"
					transitionName="resolutionLoad"
					transitionEnterCheckout={600}
					transitionLeaveCheckout={400} >
					{this.resolutions().map((resolution) => {
						return <ResolutionsSingle key={resolution._id} resolution={resolution} />
					})}
				</ReactCSSTransitionGroup>						
			</ReactCSSTransitionGroup>
		)
	}
}