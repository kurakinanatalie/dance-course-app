const classModel = require('../models/class');

function listClasses(req, res) {
  const courseId = req.params.courseId;
  classModel.getClassesByCourse(courseId, (err, classes) => {
    res.render('classes', { courseId, classes });
  });
}

function showAddForm(req, res) {
  res.render('add-class', { courseId: req.params.courseId });
}

function addClass(req, res) {
  const data = {
    courseId: req.params.courseId,
    dateTime: req.body.dateTime,
    location: req.body.location
  };
  classModel.createClass(data, () => res.redirect(`/courses/${req.params.courseId}/classes`));
}

function showEditForm(req, res) {
  classModel.getClassById(req.params.classId, (err, cls) => {
    res.render('edit-class', { cls });
  });
}

function updateClass(req, res) {
  const updated = {
    dateTime: req.body.dateTime,
    location: req.body.location
  };
  classModel.updateClass(req.params.classId, updated, () => {
    res.redirect(`/courses/${req.body.courseId}/classes`);
  });
}

function deleteClass(req, res) {
  classModel.deleteClass(req.params.classId, () => {
    res.redirect(`/courses/${req.body.courseId}/classes`);
  });
}

module.exports = {
  listClasses,
  showAddForm,
  addClass,
  showEditForm,
  updateClass,
  deleteClass
};