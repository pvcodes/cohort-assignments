const { Admin } = require("../db")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    user = {
        username: req.headers.username,
        password: req.headers.password
    }

    doesUserExist = await Admin.findOne(user)

    if (doesUserExist) {
        next();
    } else {
        res.status(403).json({ msg: 'User not logged in' })
    }


}

module.exports = adminMiddleware;