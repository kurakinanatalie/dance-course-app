const Datastore = require('nedb');
const classDB = new Datastore({ filename: './data/classes.db', autoload: true });

function createClass(data, callback) {
  classDB.insert(data, callback);
}

function getClassesByCourse(courseId, callback) {
  classDB.find({ courseId }, callback);
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
  deleteClass
};