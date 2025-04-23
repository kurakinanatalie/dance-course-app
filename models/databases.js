const path = require('path');
const Datastore = require('@seald-io/nedb');

// all databases
const courseDB = new Datastore({ filename: path.join(__dirname, '../data/courses.db') });
const classDB = new Datastore({ filename: path.join(__dirname, '../data/classes.db') });
const bookingDB = new Datastore({ filename: path.join(__dirname, '../data/bookings.db') });
const organiserDB = new Datastore({ filename: path.join(__dirname, '../data/organisers.db') });

// load all
courseDB.loadDatabase();
classDB.loadDatabase();
bookingDB.loadDatabase();
organiserDB.loadDatabase();

module.exports = {
  courseDB,
  classDB,
  bookingDB,
  organiserDB
};
