import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nama: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

export default User;
