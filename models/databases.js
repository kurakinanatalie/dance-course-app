const path = require('path');
const Datastore = require('@seald-io/nedb');

// all databases
const courseDB = new Datastore({ filename: path.join(__dirname, '../data/courses.db'), autoload: true });
const classDB = new Datastore({ filename: path.join(__dirname, '../data/classes.db'), autoload: true });
const bookingDB = new Datastore({ filename: path.join(__dirname, '../data/bookings.db'), autoload: true });
const organiserDB = new Datastore({ filename: path.join(__dirname, '../data/organisers.db'), autoload: true });

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
