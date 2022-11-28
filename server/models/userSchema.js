const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
   username: {
     type: String,
     required: true,
     unique: true
   },
   email: {
    type: String,
    required: true,
    unique: true 
   },
   password: {
    type: String,
    required: true,
   },
   token : [
    {
        token : {
            type: String,
            required: true,
        }
    }
   ]
});

//Hashing password to secure
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password, 10);
    }
    next();
});

// Generate token to verify user
userSchema.methods.generateToken = async function(){
    try {
        let generateToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.token = this.tokens.concat({token : generateToken});
        await this.save();
        return generateToken;
    } catch(error){
         console.log(error);
    }
}

//Create Model
const Users = new mongoose.model("User", userSchema);

module.exports = Users;