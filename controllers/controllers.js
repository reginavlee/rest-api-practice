const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const Teacher = mongoose.model('Teachers');

//////////////////////////// TEACHERS ////////////////////////////////////

// teachers
Teacher.find

router.route('/api/teachers')
  .get((req,res) => {
    db.collection('teachers').find().toArray((err, results) => {
      res
        .status(200)
        .send(results)
    });
  })
  .post((req, res) => {
    db.collection('teachers').save(req.body, (err, results) => {
      res
        .status(200)
        .send(results)
    });
  })

// teachers/:id
router.route('/api/teachers/:id')
  .get((req, res) => {
    console.log(req.params.id);
    db.collection('teachers').find({"_id": ObjectId("" + req.params.id)}).toArray((err, results) => {
      res
        .status(200)
        .send(results)
    });
  })
// router.route('/api/teachers/:id')
// .get((req, res) => {
//   console.log(req.params.id);
//   var id = req.params.id;
//   Teachers.findById(id, (err, results) => {
//     res
//       .status(200)
//       .send(results)
//   });
// })

//////////////////////////// STUDENTS ////////////////////////////////////

// students
router.route('/api/students')
  .get((req,res) => {
    db.collection('students').find().toArray((err, results) => {
      res
        .status(200)
        .send(results)
    });
  })
  .post((req, res) => {
    db.collection('students').save(req.body, (err, results) => {
      res
        .status(200)
        .send(results)
    });
  })

// students/:id
router.route('/api/students/:id')
  .get((req, res) => {
    db.collection('students').find({"_id": ObjectId("" + req.params.id)}).toArray((err, results) => {
      res
        .status(200)
        .send(results)
    });
  })

// students/:id/editClasses  //TODO
router.route('/api/students/:id/editClasses')
  .put((req, res) => {
    db.collection('students').update(
      {"_id": ObjectId("" + req.params.id)}, 
      {$set: 
        {
          "name": req.body.name,
          "email": req.body.email,
          "classes": req.body.classes
        }
      }, 
      (err, results) => { res.status(200).send(results) }
    );
  })

//////////////////////////// CLASSES ////////////////////////////////////

// classes
router.route('/api/classes')
  .get((req,res) => {
    db.collection('classes').find().toArray((err, results) => {
      res
        .status(200)
        .send(results)
    });
  })
  .post((req, res) => {
    db.collection('classes').save(req.body, (err, results) => {
      res
        .status(200)
        .send(results)
    });
  })

// classes/:id
router.route('/api/classes/:id')
  .get((req, res) => {
    console.log(req.params.id);
    db.collection('classes').find({"_id": ObjectId("" + req.params.id)}).toArray((err, results) => {
      res
        .status(200)
        .send(results)
    });
  })

module.exports = router;

db.close();