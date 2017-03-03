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
    const type = model[req.params.type];
    if(type){
      const temp = new type(req.body);
      temp.save((err, result)=> {
        if (err) {
          res.send(404);
        } else {
          res.status(201);
          res.json({
            name: req.body.name,
            email: req.body.email
          })
        }
      })
    } else {
      res.send(404);
    }
  })
  .get((req,res) => {
    const type = model[req.params.type];
    if(type){
      type.find({}, (err, result) => {
        if (err) console.log(err);
        res.send(200, result);
      })
    } else {
      res.send(404);
    }
  })

//////////////////////////// /api/:type/:id ////////////////////////////////

router.route('/api/:type/:id')
  .get((req,res) => {
    const type = model[req.params.type];
    if(type){
      type.find({"_id": ObjectId("" + req.params.id)}, (err, result) => {
        if (err) console.log(err);
        res.send(200, result);
      })
    } else {
      res.send(404);
    }
  })

/////////////////////// /api/:type/:id/editClasses ///////////////////////////

router.route('/api/students/:id/editClasses')
  // .put((req, res) => {
  //   db.collection('students').update(
  //     {"_id": ObjectId("" + req.params.id)}, 
  //     {$set: { "classes": req.body.classes} }, 
  //     (err, results) => { res.send(200, results) }
  //   );
  // })
  .put((req,res) => {
    const type = model[req.params.type];
    if(type){
      type.find({"_id": ObjectId("" + req.params.id)}, (err, result) => {
        if (err) console.log(err);
        res.send(200, result);
      })
    } else {
      res.send(404);
    }
  })

module.exports = router;
