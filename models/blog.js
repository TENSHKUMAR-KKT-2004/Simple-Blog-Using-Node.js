const mongoose = require('mongoose');


//creating Schema
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title : {
        type : String,
        required : true 
    },
    snippet : {
        type : String,
        required : true 
    },
    body : {
        type : String,
        required : true 
    }
},{timestamps:true});

//create model
const Blog = mongoose.model('Blog',blogSchema);

//export that model
module.exports = Blog;