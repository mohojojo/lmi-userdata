var express = require('express');
var router = express.Router();

var occupationdata = require('../public/data/occupationdata.json');

router.post('/', function (req, res) {

    var occupations = occupationdata.filter(function (obj) {
        return obj.name.toLowerCase().indexOf(req.body.q) >= 0;
    });

    res.json(occupations);
});

module.exports = router;
