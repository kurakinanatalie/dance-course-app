// const Datastore = require('@seald-io/nedb');
// const courseDB = new Datastore({ filename: './data/courses.db', autoload: true });
// const classDB = new Datastore({ filename: './data/classes.db', autoload: true });

const path = require('path');
const Datastore = require('@seald-io/nedb');

const courseDB = new Datastore({ filename: path.join(__dirname, '../data/courses.db') });

courseDB.loadDatabase((err) => {
  if (err) {
    console.error('Failed to load courses.db:', err);
  } else {
    console.log('courses.db loaded');
  }
});


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

function deleteCourseAndClasses(id, callback) {
  courseDB.remove({ _id: id }, {}, (err, numRemoved) => {
    if (err) return callback(err);

    classDB.remove({ courseId: id }, { multi: true }, (err2) => {
      if (err2) return callback(err2);

      callback(null, numRemoved);
    });
  });
}

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  deleteCourseAndClasses
};
