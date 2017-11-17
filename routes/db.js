var express = require('express');
var router = express.Router();

var Job = require('../models/Job.js');

router.get('/', function(req, res, next) {
	Job.findAll().then(jobs => {
	  res.json(jobs)
	})
});

module.exports = router;
