const zod = require('zod');
const { Admin } = require('../db')
const jwt = require('jsonwebtoken')


const USERSCHEMA_ZOD = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})

function validateInput(user) {
    if (USERSCHEMA_ZOD.safeParse(user).success) return true;
    
    else false;
}

// Middleware for handling auth
function adminMiddleware1(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    user = {
        username: req.headers.username,
        password: req.headers.password
    }
    console.log(`Headers: ${user}`);

    // Validating input
    if (validateInput(user)) {
        // Checking does user exits already
        Admin.findOne(user)
            .then((userData) => {
                console.log(userData);
                if (userData) {
                    res.json({ msg: 'User already exist' })
                    return
                } else {
                    req.userData = userData;
                    next();
                }
            })
    } else
        res.status(411).json({ msg: 'Not valid input' })
}

function adminMiddleware2(req, res, next) {
    token = req.headers.authorization;
    token = (token.split(" "))[1]
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) res.json({ msg: 'Coudn\'t log you in, try clearning cookies of the side' })
        else {
            req.username = decoded.username;
            next();
        }

    })
}

module.exports = {
    validateInput,
    adminMiddleware1,
    adminMiddleware2
}
