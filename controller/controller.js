const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const db = require('../data/db');

// const Teacher = mongoose.model('Teachers');
// const Student = mongoose.model('Students');
// const Classes = mongoose.model('Classes');

//////////////////////////// /api/:type ////////////////////////////////////

router.route('/api/:type')
  .get((req,res) => {
    db.collection(req.params.type).find().toArray((err, results) => {
      res
        .status(200)
        .send(results)
    });
  })
  .post((req, res) => {
    db.collection(req.params.type).save(req.body, (err, results) => {
      res
        .status(200)
        .send(results)
    });
  })

//////////////////////////// /api/:type/:id ////////////////////////////////

router.route('/api/:type/:id')
  .get((req, res) => {
    db.collection(req.params.type)
      .find({"_id": ObjectId("" + req.params.id)})
      .toArray((err, results) => {
        res
          .status(200)
          .send(results)
      });
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

module.exports = router;
