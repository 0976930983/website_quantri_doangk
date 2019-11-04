var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/qldonhang', function(req, res, next) {
  res.render('QLbanhang/QLdonhang', { title: 'Express' });
});
router.get('/tkdoanhthu', function(req, res, next) {
    res.render('QLbanhang/TKdoanhthu', { title: 'Express' });
});
router.get('/top10', function(req, res, next) {
    res.render('QLbanhang/Top10', { title: 'Express' });
});
    

module.exports = router;
