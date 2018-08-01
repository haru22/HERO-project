var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// load website

router.get('/about', function(req, res) {
   res.render('about',{});
});
router.get('/history', function(req, res) {
   res.render('history', { });
});
router.get('/cambodia', function(req, res) {
   res.render('cambodia', { });
});

module.exports = router;
