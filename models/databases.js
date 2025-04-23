const path = require('path');
const Datastore = require('@seald-io/nedb');
const bcrypt = require('bcrypt');

// all databases
const courseDB = new Datastore({ filename: path.join(__dirname, '../data/courses.db'), autoload: true });
const classDB = new Datastore({ filename: path.join(__dirname, '../data/classes.db'), autoload: true });
const bookingDB = new Datastore({ filename: path.join(__dirname, '../data/bookings.db'), autoload: true });
const organiserDB = new Datastore({ filename: path.join(__dirname, '../data/organisers.db'), autoload: true });

// Ensure default admin exists
organiserDB.findOne({ username: 'admin' }, (err, existing) => {
    if (!err && !existing) {
      bcrypt.hash('password123', 10, (hashErr, hash) => {
        if (hashErr) return console.error('Failed to hash default password:', hashErr);
        organiserDB.insert({ username: 'admin', password: hash }, (insertErr) => {
          if (insertErr) return console.error('Failed to insert default admin:', insertErr);
          console.log('Default admin created (admin / password123)');
        });
      });
    }
  });

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
