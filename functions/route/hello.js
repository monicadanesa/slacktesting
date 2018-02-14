/**
 * Created by ikhlasfirlana on 2/14/18.
 */
var express = require("express");
var router = new express.Router();
var path    = require("path");

// GET /
router.get("", function(req, res, next) {

    var userName = req.body.user_name;
    console.log("[INCOMING]", req.body);

    var boyPayload = {
        text: "Hello , GET Master! "
    };

    if (userName != "slackbot") {
        return res.status(200).json(boyPayload)
    } else {
        return res.status(200).end()
    }
});

// GET /
router.post("", function(req, res, next) {

    var userName = req.body.user_name;
    console.log("[INCOMING]", req.body);

    var boyPayload = {
        text: "Hello , Master! "+req.body.user_name +" may i help you?"
    };

    if (userName != "slackbot") {
        return res.status(200).json(boyPayload)
    } else {
        return res.status(200).end()
    }
});


// GET /install
router.get("/install", function(req, res) {

    res.sendFile(path.join(__dirname+'/../html/install.html'))
});


module.exports = router;