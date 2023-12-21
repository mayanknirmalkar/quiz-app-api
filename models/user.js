import mongoose from "mongoose";
import bcrypt, { genSalt } from "bcrypt";

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        unique:true,
        required:[true, 'Email is required']
    },
    password:{
        type:String,
        required:[true, 'password is required']
    }
})
/**Before saving a user document, hash the entered password for security */
userSchema.pre("save", async function(next){

    if(!this.isModified('password')){
        next();
    }
    
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', userSchema);

export default User;