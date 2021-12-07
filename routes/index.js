var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render("index");
});
router.get('/contact', function(req, res) {
  res.render("contact");
});
router.get('/bedroom', function(req, res) {
  res.render("bedroom");
});
router.get('/kitchen', function(req, res) {
  res.render("kitchen");
});

module.exports = router;
