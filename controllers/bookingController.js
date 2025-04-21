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

function bookCourse(req, res) {
  const bookingData = {
    type: 'course',
    courseId: req.params.courseId,
    name: req.body.name,
    email: req.body.email,
    date: new Date()
  };

  bookingModel.createBooking(bookingData, (err) => {
    if (err) {
      return res.status(500).send("Failed to save booking");
    }
    res.render('booking-success-courses');
  });
}

function showClassBookingForm(req, res) { 
  res.render('book-class', { classId: req.params.classId }); 
}

function showCourseBookingForm(req, res) {
  res.render('book-course', { courseId: req.params.courseId });
}

function bookClass(req, res) {
  const bookingData = {
    type: 'class',
    classId: req.params.classId,
    name: req.body.name,
    email: req.body.email,
    date: new Date()
  };

  bookingModel.createBooking(bookingData, (err) => {
    if (err) {
      return res.status(500).send("Failed to save booking");
    }
    res.render('booking-success-classes');
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
