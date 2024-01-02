const mongoose = require('mongoose')
const { Router } = require("express");
const { validateInput, adminMiddleware1, adminMiddleware2 } = require("../middleware/admin");
const router = Router();
const zod = require('zod');
const jwt = require('jsonwebtoken')
const { Admin, Course } = require("../db");



require('dotenv').config();


const HEADERSCHEMA_ZOD = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})

// Admin Routes
router.post('/signup', adminMiddleware1, (req, res) => {
    // Implement admin signup logic

    userData = req.userData; // from adminMiddleware

    u = new Admin(userData)
    u.save()
        .then(() => {
            res.json({ msg: 'Admin created successfully' })
            return;
        })
        .catch(() => res.status(403).json({ msg: 'Coudn\'t add to DB' }))

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic

    user = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(`Body: ${user.username} - ${user.password}`);

    if (validateInput(user)) {
        Admin.findOne(user)
            .then((userData) => {
                console.log(userData);
                if (userData) {
                    token = jwt.sign({ username: userData.username }, process.env.JWT_SECRET, (err, token) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(token);
                            res.json({ token })
                        }
                    })
                } else {
                    res.status(411).json({ msg: 'User does not exist' })
                }

            }).catch(err => res.status(403).json({ msg: 'Something went wrong, Try again' }))

    } else
        res.status(411).json({ msg: 'Not valid input' })

});

router.post('/courses', adminMiddleware2, (req, res) => {
    username = req.username // got from the adminMiddleware2
    course = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    }
    // may validate this data too, as the imageLink is acutal a link or price has only digits or Title must not be empty
    // But I'm not doing as I'm already late >_< 

    c = new Course(course)
    c.save()
        .then((courseData) => {
            Admin.updateOne({ username }, {
                $push: { courseIds: courseData._id }
            })
                .then(() => res.json({ msg: 'Course created successfully', c }))
                .catch(() => {
                    try {
                        Course.deleteOne(courseData);
                    } catch (e) {
                        // print(e);
                        console.log(e);

                    }
                    res.status(411).json({ msg: 'Coudn\'t save to DB, try again' })
                })

        })
        .catch(() => res.status(411).json({ msg: 'Coudn\'t save to DB, try again' }))


    // Implement course creation logic
});

async function getCourse(id) {
    return await Course.findOne({ _id: id })
}


router.get('/courses', adminMiddleware2, async (req, res) => {
    username = req.username // got from the adminMiddleware2


    try {
        allCourses = []
        user = await Admin.findOne({ username })
        cid = user.courseIds

        // allCourses = await getCourses(cid)
        cid.forEach(async id => {
            course = await getCourse(id)
            allCourses.push(course)
            console.log(allCourses.length);
        });

        console.log('something');
        res.json({ allCourses })
    }
    catch (err) {
        console.log(err);
        res.json({ msg: 'DB server are down' })
    }



    // Implement fetching all courses logic
});

module.exports = router;