var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/qltaikhoan', function(req, res, next) {
  res.render('QLkhachhang/QLtaikhoan', { title: 'Express' });
});

router.get('/thaydoithongtin', function(req, res, next) {
    res.render('QLkhachhang/Thaydoithongtin', { title: 'Express' });
  });
module.exports = router;
