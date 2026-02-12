import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({

  serviceId: {
  type: String,
  required: true,
  unique: true
},
name: {
  type: String,
  required: true
},
description: String,
price: {
  type: Number,
  required: true
}

}, 
{ timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

export default Service;
