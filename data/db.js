const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/practice';

mongoose.connect(dbURL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose connected', dbURL);
});
db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
db.on('error', (err) => {
  console.log('Mongoose connection error: ', err);
});

process.on('SIGINT', () => {  
  db.close(() => { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

// require('./models');

module.exports = db;
