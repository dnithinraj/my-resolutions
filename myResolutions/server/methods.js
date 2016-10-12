import { Resolutions } from '../imports/api/resolutions.js';

Meteor.methods({
	addResolution(resolution) {

		check(resolution, String);
		if (!Meteor.userId()) {
			throw new Meteor.Error('Not Authorized');
		}

		Resolutions.insert({
			text: resolution,
			complete: false,
			createdAt: new Date(),
			user: Meteor.userId()
		});		
	},

	toggleResolution(resolution) {

		check(resolution, Object);
		if (Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('Not Authorized');
		}

		Resolutions.update(resolution._id, {
			$set: {complete: !resolution.complete}
		});		
	},

	deleteResolution(resolution) {

		check(resolution, Object);
		if (Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('Not Authorized');
		}		

		Resolutions.remove(resolution._id);
	}		
});
