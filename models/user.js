const Datastore = require('@seald-io/nedb');
const bcrypt = require('bcrypt');

const organiserDB = new Datastore({ filename: './data/organisers.db', autoload: true });

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