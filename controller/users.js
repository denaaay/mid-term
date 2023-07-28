const repoUser = require('../repository/users');

const saveUser = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        if (req.session.userId) {
            res.status(401).json({
                status_code: 401,
                message: "please log out first"
            });
            return;
        }

        if (username === '') {
            res.status(400).json({
                status_code: 400,
                message: "username cannot null string"
            });
            return;
        }

        if (password === '') {
            res.status(400).json({
                status_code: 400,
                message: "password cannot null string"
            });
            return;
        }

        if (username.length < 5 || username.length > 20) {
            res.status(400).json({
                status_code: 400,
                message: "username cannot less than 5 or more than 20 character"
            });
            return;
        }

        if (password.length < 5) {
            res.status(400).json({
                status_code: 400,
                message: "password cannot less than 5 character"
            });
            return;
        }

        const result = await repoUser.saveUser(username, password);
        res.status(201).json({
            status_code: 201,
            message: "success creating user",
            data: result
        });
        return;
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            message: error.message,
        });
        return;
    }
}

const findUser = async (req, res) => {
    try {
        const userResult = await repoUser.findUser();
        res.status(200).json({
            status_code: 200,
            message: "success getting all users",
            data: userResult
        });
        return;
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            message: error.message
        });
        return;
    }
}

const findByIdUser = async (req, res) => {
    try {
        const id = req.params.id;

        const userResult = await repoUser.findByIdUser(id);
        if (!userResult) {
            res.status(400).json({
                status_code: 400,
                message: "user not found",
            });
            return;
        }

        res.status(200).json({
            status_code: 200,
            message: "success getting user by id",
            data: userResult
        });
        return;
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            message: error.message
        });
        return;
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const userResult = await repoUser.deleteUser(id);
        if (!userResult) {
            res.status(400).json({
                status_code: 400,
                message: "user not found",
            });
            return;
        }

        res.status(200).json({
            status_code: 200,
            message: "success deleting user",
            data: userResult
        });
    } catch (error) {
        res.status(500).json({
            status_code: 500,
            message: error.message
        });
        return;
    }
}

module.exports = {
    saveUser,
    findUser,
    findByIdUser,
    deleteUser,
}