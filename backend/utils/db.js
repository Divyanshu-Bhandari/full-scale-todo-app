const mongoose = require("mongoose");

try {
    mongoose.connect("{ replace with your mongoDB connetion string }/todos")
    const todoSchema = mongoose.Schema({
        task: String,
        completed: Boolean
    });

    const db = mongoose.model('todos', todoSchema);

    console.log("MongoDB connected successfully");

    module.exports = {
        db
    }
} catch (error) {
    console.error(error);
}


