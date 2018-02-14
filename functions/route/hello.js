/**
 * Created by ikhlasfirlana on 2/14/18.
 */
var express = require("express");
var bodyParser = require("body-parser");
var router = new express.Router();

// parse body
router.use(bodyParser.urlencoded({extended: true}));

// GET /
router.get("/", function(req, res, next) {

    var username = req.body.user_name;
    var boyPayload = {
        text: 'Hello ' + username + ', '
    };

    if (username != 'slackbot') {
        return res.status(200).json(boyPayload)
    } else {
        return res.status(200).end();
    }
});


module.exports = router;