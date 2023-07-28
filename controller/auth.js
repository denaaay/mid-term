const repoAuth = require('../repository/auth');

const checkAuth = async (req, res, next) => {
    if (req.session.userId) {
        next();
    } else {
        res.status(401).json({
            status_code: 401,
            message: "please log in first",
        });
        return;
    }
}

const login = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const authResult = await repoAuth.findByUsername(username);

        if (!authResult) {
            res.status(404).json({
                status_code: 404,
                message: "user not found",
            });
            return;
        }

        if (password !== authResult.password) {
            res.status(400).json({
                status_code: 400,
                message: "incorrect password",
            });
            return;
        }

        req.session.userId = authResult.id;

        res.status(200).json({
            status_code: 200,
            message: "login success",
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

const logout = async (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            res.status(500).json({
                status_code: 500,
                message: error.message
            });
            return;
        } else {
            res.status(200).json({
                status_code: 200,
                message: "logout success"
            });
            return;
        }
    })
}

module.exports = {
    checkAuth,
    login,
    logout,
}