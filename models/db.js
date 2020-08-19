import mongoose from 'mongoose'
import User from './user'

const db = mongoose.connect("mongodb://127.0.0.1:27017/todo")

let user = {
  name: 'f91',
  age: '30',
  sex: true,
  info: '我在激战2很开心',
  address: '杭州西湖'
}

let newUser = new User(user)
newUser.save()


export default db