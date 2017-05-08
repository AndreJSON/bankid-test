'use strict';

var express = require('express');
var router = express.Router();
var bankid = require('./auth');

router.post('/authenticate', function (req, res) {
	console.log(req.data);
	//bankid.authenticate('199404294176');
	res.json({success: true});
	res.end();
});

module.exports = router;