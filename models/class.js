//const Datastore = require('@seald-io/nedb');
//const classDB = new Datastore({ filename: './data/classes.db', autoload: true });

// const path = require('path');
// const Datastore = require('@seald-io/nedb');

// const classDB = new Datastore({ filename: path.join(__dirname, '../data/classes.db') });

// classDB.loadDatabase((err) => {
//   if (err) {
//     console.error('Failed to load classes.db:', err);
//   } else {
//     console.log('classes.db loaded');
//   }
// });

const { classDB } = require('./databases');

function createClass(data, callback) {
  classDB.insert(data, callback);
}

function getClassesByCourse(courseId, callback) {
  classDB.find({ courseId }, callback);
}

function getAllClasses(callback) {
  classDB.find({}, callback);
}

function getClassById(id, callback) {
  classDB.findOne({ _id: id }, callback);
}

function updateClass(id, updatedData, callback) {
  classDB.update({ _id: id }, { $set: updatedData }, {}, callback);
}

function deleteClass(id, callback) {
  classDB.remove({ _id: id }, {}, callback);
}

module.exports = {
  createClass,
  getClassesByCourse,
  getClassById,
  updateClass,
  getAllClasses,
  deleteClass
};