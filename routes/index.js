var express = require('express');
var unirest = require('unirest');
var router = express.Router();

require('dotenv').load();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function getRequest() {

}

module.exports = router;
