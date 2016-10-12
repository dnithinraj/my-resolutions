import { Meteor } from 'meteor/meteor';
import { Resolutions } from '../imports/api/resolutions.js';

Meteor.publish("allResolutions", function() {
	return Resolutions.find({});
});

Meteor.publish("userResolutions", function() {
	return Resolutions.find({user: this.userId});
});