const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name : String,
  email: String
});

const studentSchema = new mongoose.Schema({
  name : String,
  email: String
});

const classesSchema = new mongoose.Schema({
  code : String,
  name: String 
})

mongoose.model('Teachers', teacherSchema, 'practice');
mongoose.model('Students', studentSchema, 'practice');
mongoose.model('Classes', classesSchema, 'practice');
