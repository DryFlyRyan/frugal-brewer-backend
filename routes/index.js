var express = require('express');
var unirest = require('unirest');
var router = express.Router();

require('dotenv').load();

/* GET home page. */

router.get('/', function(req, res, next) {
  console.log('calling brewerydb');
  getRequest('fermentables')
  .then(function(data) {
    console.log('data got');
    console.log(data);
    res.send(data)
  }).catch(function(err){
    res.JSON(err)
  })
});

function getRequest(destination, page) {
  var currentPage = page || 1;
  return new Promise(function(resolve, reject) {
    unirest.get('http://api.brewerydb.com/v2/' + destination).query({
      'key': process.env.BREWERYDB_API_KEY,
      'p': currentPage
    })
    .header({'Accept': 'application/json'}, {"Access-Control-Allow-Headers": "x-requested-with, x-requested-by"})
    .end(function (response){
      console.log('ended');
      resolve(response);
}   );
  })
}

module.exports = router;
