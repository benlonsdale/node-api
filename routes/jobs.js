var express = require('express');
var router = express.Router();

var moment = require('moment');

var Job = require('../models/Job.js');
var Location = require('../models/Location.js');

router.get('/', (req, res, next) => {
	Job.findAll({
		include: [{
			model: Location
		}]
	})
	.then(jobs => {
	  	res.json(jobs)
	})
});

router.post('/', (req, res) => {
	let {name, description, date} = req.body;
	console.log(name, description, date);
	Job.create({
		name: name,
		description: description,
		date: moment(date)
	}).then((newJob) => {
		res.json(newJob);
	})	
})

router.post('/', function(req, res, next){
	console.log('posted');
})

module.exports = router;