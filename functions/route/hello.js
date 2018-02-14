/**
 * Created by ikhlasfirlana on 2/14/18.
 */
var express = require("express");
var router = new express.Router();
var path    = require("path");

// GET /
router.get("", function(req, res) {

    var boyPayload = {
        text: "Hello , Master! "
    };

    res.status(200).json(boyPayload)
});


// GET /install
router.get("/install", function(req, res) {

    res.sendFile(path.join(__dirname+'/../html/install.html'))
});


module.exports = router;