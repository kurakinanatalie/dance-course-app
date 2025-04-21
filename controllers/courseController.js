const courseModel = require('../models/course');

function listCourses(req, res) {
  courseModel.getAllCourses((err, courses) => {
    res.render('courses', { courses });
  });
}

function showAddForm(req, res) {
  res.render('add-course');
}

function addCourse(req, res) {
  const data = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    type: req.body.type
  };
  courseModel.createCourse(data, () => res.redirect('/courses'));
}

function showEditForm(req, res) {
  courseModel.getCourseById(req.params.id, (err, course) => {
    res.render('edit-course', {
      course,
      isWeekly: course.type === 'weekly',
      isWeekend: course.type === 'weekend'
    });
  });
}

function updateCourse(req, res) {
  const updatedData = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    type: req.body.type
  };
  courseModel.updateCourse(req.params.id, updatedData, () => res.redirect('/courses'));
}

function deleteCourse(req, res) {
  courseModel.deleteCourse(req.params.id, () => res.redirect('/courses'));
}

module.exports = {
  listCourses,
  showAddForm,
  addCourse,
  showEditForm,
  updateCourse,
  deleteCourse
};
