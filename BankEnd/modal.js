const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required:true,
        unique: true,
    },

    password:{
        type:String,
        required:true
    },
    
    username: {
        type: String,
        required: true,
      
    },

    phone : {
        type:Number,
        required:true,
    }
});

const User = mongoose.model("User" , userSchema)

module.exports = User;