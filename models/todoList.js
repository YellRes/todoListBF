import mongoose from 'mongoose'

const todoListSchema = mongoose.Schema({
  userId: String,
  taskName: String,
  taskIsDone: Boolean,
  id: Number
}, {collection: 'TodoList'})

const todoList = mongoose.model('TodoList', todoListSchema)
export default todoList