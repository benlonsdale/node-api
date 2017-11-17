var db = require('../Database');
var Sequelize = require('Sequelize');
var Location = require('./Location');

const Job = db.define('job', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  date: {
  	type: Sequelize.DATE
  }
});

module.exports = Job;


// force: true will drop the table if it already exists
