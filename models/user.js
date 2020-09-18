import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  userEmail: String,
  userPhone: String,
  userMoto: String,
  blogNum: Number,
  tagNum: Number
}, {collection: 'User'})

const user = mongoose.model('User', userSchema)
export default user
