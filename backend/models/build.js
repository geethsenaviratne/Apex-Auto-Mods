import mongoose from 'mongoose';

const buildSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users', 
    required: true 
},
  carModel: { 
    type: String, 
    required: true },

  color: { 
    type: String, 
    required: true },

  selectedParts: [{ 
    type: String 
  }],

  createdAt: { 
    type: Date, 
    default: Date.now 
  }
  
});

const Build = mongoose.model('Build', buildSchema);

export default Build;