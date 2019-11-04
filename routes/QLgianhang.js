var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/htgianhang', function(req, res, next) {
  res.render('QLgianhang/HTgianhang', { title: 'Express' });
});

router.get('/qlsanpham', function(req, res, next) {
    res.render('QLgianhang/QLsanpham', { title: 'Express' });
  });
module.exports = router;
