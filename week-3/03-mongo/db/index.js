const mongoose = require('mongoose');

require('dotenv').config();


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    courseIDs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourseID: Array
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({

    title: String,
    description: String,
    price: Number,
    imageLink: String

    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}