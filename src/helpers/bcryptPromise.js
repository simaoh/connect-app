const bcrypt = require('bcrypt');
const bcryptSaltRounds = 10;

// wrap bcrypt functionality into a promise-wrapped utility

// generates a hash from a plain text
module.exports.hashify = plainTextPassword => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plainTextPassword, bcryptSaltRounds, function(err, hash) {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
};

// compares a hash and a plain text
module.exports.compare = (plainTextPassword, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainTextPassword, hash, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
