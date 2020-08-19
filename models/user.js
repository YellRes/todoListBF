import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: String,
  age: String,
  sex: Boolean,
  info: String,
  address: String
}, {collection: 'User'})


export default mongoose.model('User', userSchema)
