const Datastore = require('nedb');
const bookingDB = new Datastore({ filename: './data/bookings.db', autoload: true });

function createBooking(data, callback) {
  bookingDB.insert(data, callback);
}

function getBookingsByCourse(courseId, callback) {
  bookingDB.find({ type: 'course', courseId }, callback);
}

function getBookingsByClass(classId, callback) {
  bookingDB.find({ type: 'class', classId }, callback);
}

module.exports = {
  createBooking,
  getBookingsByCourse,
  getBookingsByClass
};