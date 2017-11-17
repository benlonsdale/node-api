var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('users index');
});

router.get('/:user_id/edit', function(req, res, next) {
	console.log(req.params);
	res.send('editing - '+ req.params.user_id +1);
});


module.exports = router;
