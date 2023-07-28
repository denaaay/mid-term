const User = require('../models/users');

const findByUsername = async (username) => {
    return new Promise ((resolve, reject) => {
        User.findOne({username})
            .then(userResult => {
                resolve(userResult);
            })
            .catch(error => {
                reject(error);
            })
    });
}

module.exports = {
    findByUsername,
}