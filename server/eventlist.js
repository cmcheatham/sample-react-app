var express = require('express');
var router = express.Router();
var pg = require('pg');
var pgp = require('pg-promise')(/*options*/);
var db = pgp('postgres://ganmgdmwlkgvlw:Uu9ynJLqNaxypvlt8_VZQjS50n@ec2-54-243-210-223.compute-1.amazonaws.com:5432/d1nci3ibtm73gh?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory');
var exports = module.exports;


//CREATE EVENT
exports.createEvent = function (req, res) {

    console.log('create event');

}

//UPDATE EVENT
exports.upDateEvents = function (req, res) {

    console.log('update event');

}

//GET EVENT LIST
exports.listEvents = function (req, res) {

    console.log('list events');

}

//DELETE EVENTS
exports.deleteEvents = function (req, res) {

    console.log('delete event');

}