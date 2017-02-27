/**
 * Created by VahapZTL on 27.02.2017.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon');

var db = mongoose.connection;

db.on('open', function (req, res) {
    console.info("Mongo connection established");
});

db.on('error', function (req, res) {
    console.info("Mongo connection error!");
});

router.post('/', function(req, res, next) {
    db.collection('records').findOne({key: req.body.key}, function (err, data) {
        if(err)
            console.log(err);
        res.json({
            key: data.key,
            value: data.value,
            createdAt: data.createdAt
        });
    });
});

module.exports = router;