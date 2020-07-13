const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    category :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }

})

const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;