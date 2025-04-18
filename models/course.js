const Datastore = require('nedb');
const courseDB = new Datastore({ filename: './data/courses.db', autoload: true });

function createCourse(data, callback) {
  courseDB.insert(data, callback);
}

function getAllCourses(callback) {
  courseDB.find({}, callback);
}

function getCourseById(id, callback) {
  courseDB.findOne({ _id: id }, callback);
}

function updateCourse(id, updatedData, callback) {
  courseDB.update({ _id: id }, { $set: updatedData }, {}, callback);
}

function deleteCourse(id, callback) {
  courseDB.remove({ _id: id }, {}, callback);
}

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};