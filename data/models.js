const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name : String,
  email: String,
}, { versionKey: false });

const studentSchema = new mongoose.Schema({
  name : String,
  email: String
}, { versionKey: false });

const classesSchema = new mongoose.Schema({
  code : String,
  name: String 
}, { versionKey: false });

mongoose.model('Teachers', teacherSchema);
mongoose.model('Students', studentSchema);
mongoose.model('Classes', classesSchema);

