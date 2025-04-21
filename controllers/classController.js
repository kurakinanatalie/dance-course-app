const classModel = require('../models/class');
const courseModel = require('../models/course');

function listClasses(req, res) {
  const courseId = req.params.courseId;
  classModel.getClassesByCourse(courseId, (err, classes) => {
    res.render('classes', { courseId, classes });
  });
}

function showGlobalAddForm(req, res) {
  courseModel.getAllCourses((err, courses) => {
    res.render('add-class-global', { courses });
  });
}

function addClassFromGlobal(req, res) {
  const data = {
    courseId: req.body.courseId,
    dateTime: req.body.dateTime,
    location: req.body.location
  };
  classModel.createClass(data, () => {
    res.redirect('/classes');
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

function listAllClasses(req, res) {
  classModel.getAllClasses((err, classes) => {
    courseModel.getAllCourses((err, courses) => {
      const courseMap = {};
      courses.forEach(c => courseMap[c._id] = c.name);
      
      const classList = classes.map(cls => ({
        ...cls,
        courseName: courseMap[cls.courseId] || 'Unknown Course'
      }));

      res.render('classes-all', { classes: classList });
    });
  });
}

module.exports = {
  listClasses,
  showAddForm,
  addClass,
  showEditForm,
  updateClass,
  deleteClass,
  listAllClasses,
  showGlobalAddForm, 
  addClassFromGlobal
};