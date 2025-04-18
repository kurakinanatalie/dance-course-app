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

module.exports = {
  showCourseBookingForm,
  bookCourse,
  showClassBookingForm,
  bookClass,
  viewCourseParticipants,
  viewClassParticipants
};
