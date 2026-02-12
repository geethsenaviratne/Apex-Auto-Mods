
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    
    email: {
        type : String,
        required : true, 
        unique : true,
        lowercase: true 
    },

    name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true
  },

    passwordHash: {
        type : String,
        required : true
    }
},
{ timestamps: true }
);

const User = mongoose.model('Users', userSchema);

export default User;