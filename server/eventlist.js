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

    db.query("select ID, EVENT_TITLE, START_DATE, END_DATE, CATEGORY, DESCRIPTION, FEATURED_FLAG, CREATED_AT, UPDATED_AT FROM EVENTS;")
      .then(function (data) {
          return res.json(data);
      })
      .catch(function (error) {
          // error;
          console.log(error.message + error.stack);
      });

}

//DELETE EVENTS
exports.deleteEvents = function (req, res) {
  console.log('delete event');
  db.query("DELETE FROM EVENTS WHERE ID=$1;", [req.params.id])
    .then(function (data) {
      return res.json({data: data});
    })
    .catch(function (error) {
      // error;
      console.log(error.message + error.stack);
    });

}