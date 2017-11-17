var db = require('../Database');
var Sequelize = require('Sequelize');
var Job = require('./Job');

console.log(Job);

const Location = db.define('location', {
	name: {
		type: Sequelize.STRING,
	},
	description: {
		type: Sequelize.STRING,
	},
	specialInstructions:{
		type: Sequelize.STRING,
	},
	lat: {
		type: Sequelize.DECIMAL(9,6)
	},
	lng: {
		type: Sequelize.DECIMAL(9,6)
	},
	jobId: {
		type: Sequelize.INTEGER,
		references: {
			model: 'jobs',
			key: 'id', 		
		}
	}
});

// Location.belongsTo(Job);

module.exports = Location;