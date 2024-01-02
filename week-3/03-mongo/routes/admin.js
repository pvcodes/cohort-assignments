const { Router } = require("express");
const zod = require('zod')
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Course, Admin } = require("../db")
const mongoose = require('mongoose');


// Admin Routes

// router.use(adminMiddleware)

// Input Body: { username: 'admin', password: 'pass' } 
// Output: { message: 'Admin created successfully' }

router.post('/signup', (req, res) => {

    data = {
        username: req.headers.username,
        password: req.headers.password
    }
    const userZodSchema = zod.object({
        username: zod.string().email(),
        password: zod.string().min(6)
    })


    if (userZodSchema.safeParse(data).success) {
        user = new Admin(data);
        user.save().then(() => {
            res.json({ msg: 'User Created Successfully' })
        })
    } else {
        res.status(403).json({ msg: 'Not proper inputs' })
    }




    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, async (req, res) => {
    course = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    }
    courseM = new Course(course)

    c = await courseM.save()

    if (c) {
        addCourse = await Admin.findOneAndUpdate({ username: req.headers.username }, {
            $push: { courseIDs: c._id }
        })
        if (addCourse) {
            res.json({ msg: 'Added Course' })
            return
        }
    }
    res.json({ msg: 'Something went wrong' })
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, async (req, res) => {

    username = req.headers.username;

    user = await Admin.findOne({ username: username });

    if (user) {
        CIDs = user.courseIDs
        // CIDs.forEach((element, idx, arr) => {
        //     arr[idx] = mongoose.Schema.Types.ObjectId(element);

        // });

        console.log(typeof CIDs[0]);


        courses = await Course.find(CIDs);
        if (courses) {
            res.json(courses);
        }

    }
    res.json({ msg: 'somwthing went wrong' })



    // Implement fetching all courses logic
});

module.exports = router;