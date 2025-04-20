const bookingModel = require('../models/booking');

function viewCourseParticipants(req, res) {
  bookingModel.getBookingsByCourse(req.params.courseId, (err, participants) => {
    res.render('participants-course', {
      participants,
      courseId: req.params.courseId
    });
  });
}

function viewClassParticipants(req, res) {
  bookingModel.getBookingsByClass(req.params.classId, (err, participants) => {
    res.render('participants-class', {
      participants,
      classId: req.params.classId
    });
  });
}

function showCourseBookingForm(req, res) {
  res.render('book-course', { courseId: req.params.courseId });
}

function bookCourse(req, res) { 
  res.render('book-course', { courseId: req.params.courseId }); 
}

function showClassBookingForm(req, res) { 
  res.render('book-course', { courseId: req.params.courseId }); 
}

function bookClass(req, res) { 
  res.render('book-course', { courseId: req.params.courseId }); 
}


module.exports = {
  showCourseBookingForm,
  bookCourse,
  showClassBookingForm,
  bookClass,
  viewCourseParticipants,
  viewClassParticipants
};
