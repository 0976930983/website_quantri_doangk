var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dell3480', function(req, res, next) {
  res.render('chitiet_sp/dell3480', { title: 'Express' });
});

router.get('/dell3567', function(req, res, next) {
    res.render('chitiet_sp/dell3567', { title: 'Express' });
});

router.get('/dell9380', function(req, res, next) {
    res.render('chitiet_sp/dell9380', { title: 'Express' });
});

router.get('/hp2', function(req, res, next) {
    res.render('chitiet_sp/hp2', { title: 'Express' });
});

router.get('/msi2', function(req, res, next) {
    res.render('chitiet_sp/msi2', { title: 'Express' });
});
module.exports = router;
