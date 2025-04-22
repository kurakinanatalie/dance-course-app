const path = require('path');
const Datastore = require('@seald-io/nedb');
const bcrypt = require('bcrypt');

const organiserDB = new Datastore({
  filename: path.join(__dirname, '../data/organisers.db')
});

organiserDB.loadDatabase((err) => {
  if (err) {
    console.error('Failed to load organisers.db:', err);
  } else {
    console.log('organisers.db loaded');
  }
});

function createOrganiser(username, password, callback) {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return callback(err);
    organiserDB.insert({ username, password: hash }, callback);
  });
}

function findOrganiser(username, callback) {
  organiserDB.findOne({ username }, callback);
}

module.exports = {
  createOrganiser,
  findOrganiser
};