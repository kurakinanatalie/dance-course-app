// const Datastore = require('@seald-io/nedb');
// const bookingDB = new Datastore({ filename: './data/bookings.db', autoload: true });

const path = require('path');
const Datastore = require('@seald-io/nedb');

const bookingDB = new Datastore({ filename: path.join(__dirname, '../data/bookings.db') });

bookingDB.loadDatabase((err) => {
  if (err) {
    console.error('Failed to load bookings.db:', err);
  } else {
    console.log('bookings.db loaded');
  }
});


function createBooking(data, callback) {
  bookingDB.insert(data, callback);
}

function getBookingsByCourse(courseId, callback) {
  bookingDB.find({ type: 'course', courseId }, callback);
}

function getBookingsByClass(classId, callback) {
  bookingDB.find({ type: 'class', classId }, callback);
}

function getAllBookings(callback) {
  bookingDB.find({}, callback);
}

function deleteBooking(id, callback) {
  bookingDB.remove({ _id: id }, {}, callback);
}

module.exports = {
  createBooking,
  getBookingsByCourse,
  getBookingsByClass,
  getAllBookings,
  deleteBooking
};