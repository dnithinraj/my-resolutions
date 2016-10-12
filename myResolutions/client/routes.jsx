import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import App from '../imports/ui/App.jsx';
import About from './pages/About.jsx';
import ResolutionDetail from '../imports/ui/ResolutionDetail.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<App />)
		})
	}
})

FlowRouter.route('/about', {
	action() {
		mount(MainLayout, {
			content: (<About />)
		})
	}
})

FlowRouter.route('/resolutions/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<ResolutionDetail id={params.id} />)
		})
	}
})