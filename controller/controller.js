const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const db = require('../data/db');

const model = {
  teachers: mongoose.model('Teachers'),
  students: mongoose.model('Students'),
  classes: mongoose.model('Classes')
}

//////////////////////////// /api/:type ////////////////////////////////////

router.route('/api/:type')
  .post((req, res) => {
    let type = model[req.params.type];
    let temp = new type(req.body);
    temp.save((err, result)=> {
      if (err) {
        console.log(err);
        res.status(404);
        res.send(err);
      } else {
        res.status(201);
        res.json({
          name: req.body.name,
          email: req.body.email
        })
      }
    })
  })
  .get((req,res) => {
    var x = model[req.params.type];
    x.find({}, (err, result) => {
      if (err) console.log(err);
      res.status(200);
      res.send(result)
    })
  })

//////////////////////////// /api/:type/:id ////////////////////////////////

router.route('/api/:type/:id')
  .get((req,res) => {
    var x = model[req.params.type];
    x.find({"_id": ObjectId("" + req.params.id)}, (err, result) => {
      if (err) console.log(err);
      res.status(200);
      res.send(result)
    })
  })

/////////////////////// /api/:type/:id/editClasses ///////////////////////////

router.route('/api/students/:id/editClasses')
  .put((req, res) => {
    db.collection('students').update(
      {"_id": ObjectId("" + req.params.id)}, 
      {$set: { "classes": req.body.classes} }, 
      (err, results) => { res.status(200).send(results) }
    );
  })
  .put((req,res) => {
    var x = model[req.params.type];
    x.find({"_id": ObjectId("" + req.params.id)}, (err, result) => {
      if (err) console.log(err);
      res.status(200);
      res.send(result)
    })
  })

module.exports = router;
