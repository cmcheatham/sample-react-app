var express = require('express');
var router = express.Router();
var app = express();

//eventlist
var eventlist = require('./eventlist.js');
router.post('/eventlist/', eventlist.createEvent);
router.get('/eventlist/', eventlist.listEvents);
router.put('/eventlist/:id' , eventlist.upDateEvents);
router.delete('/eventlist/:id', eventlist.deleteEvents);

module.exports = router;