const User = require('../models/users');

const saveUser = async (username, password) => {
    return new Promise ((resolve, reject) => {
        const user = new User({
            username: username,
            password: password
        })

        user.save()
            .then(userResult => {
                resolve(userResult);
            })
            .catch(error => {
                reject(error);
            })
    });
}

const findUser = async () => {
    return new Promise ((resolve, reject) => {
        User.find({}, 'username')
            .then(userResult => {
                resolve(userResult);
            })
            .catch(error => {
                reject(error);
            })
    });
}

const findByIdUser = async (id) => {
    return new Promise ((resolve, reject) => {
        User.findById(id, "username")
            .then(userResult => {
                resolve(userResult);
            })
            .catch(error => {
                reject(error);
            })
    });
}

const deleteUser = async (id) => {
    return new Promise ((resolve, reject) => {
        User.findByIdAndDelete(id).select("username")
            .then(userResult => {
                resolve(userResult);
            })
            .catch(error => {
                reject(error)
            });
    });
}

module.exports = {
    saveUser,
    findUser,
    findByIdUser,
    deleteUser,
}