import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  userName: String,
  password: String
}, {collection: 'User'})

const user = mongoose.model('User', userSchema)
export default user
