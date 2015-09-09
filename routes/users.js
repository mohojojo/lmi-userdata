var express = require('express');
var router = express.Router();

var userdata = require('../public/data/userdata.json');

router.get('/:id', function (req, res) {

    var user = userdata.filter(function (obj) {
        return obj.id == req.params.id;
    });

    res.json(user[0]);
});

router.post('/save', function (req, res) {

    var errors = validateUserData(req);

    if(errors) {
        res.status(500).json(errors);
        return;
    }

    res.end();
});

function validateUserData(req) {
    req.checkBody({
        'email': {
            notEmpty: true,
            isEmail: true,
            errorMessage: 'Invalid Email'
        },
        'name': {
            notEmpty: true,
            errorMessage: 'Invalid name'
        }
    });

    if (req.body.birthday) {
        var birthday = new Date(req.body.birthday);
        req.check('birthday', 'Must be older than 18').olderThan(18);
    }

    return req.validationErrors();
}

module.exports = router;
