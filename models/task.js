const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title : String,
    priority : Number,
    dueDate:Date,
    description : String,
    status: String,
});
module.exports = mongoose.model('Task',taskSchema);