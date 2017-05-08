'use strict';

var express = require('express');
var router = express.Router();
var bankid = require('./auth');

router.post('/authenticate', function (req, res) {
	bankid.authenticate(req.body.pno, function (idRes) {
		if(idRes.personalNumber === req.body.pno) {
			res.json({success: true});
		} else {
			res.json({success: false});
		}
		res.end();
	});
});

module.exports = router;