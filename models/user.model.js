import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  address:{
    type:String,
    required: true
  },
  number:{
    type:Number,
    required: true
  },
},  
{ timestamps: true });

const User = mongoose.model('User', UserSchema);


export default User