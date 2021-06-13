var express = require('express');
var router = express.Router();
var express = require("express");
const post = require("../slack/slack");

var router = express.Router();

router.get("/", async function (req, res, next) {
  await post
  res.render('index', { title: 'Google Sign in' });
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
  
// });

module.exports = router;
