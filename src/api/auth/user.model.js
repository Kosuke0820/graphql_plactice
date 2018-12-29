import mongoose, { Schema } from 'mongoose';

const schema = mongoose.schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

export default mongoose.model('user', UserSchema);