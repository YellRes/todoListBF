import mongoose from 'mongoose'

const todoListSchema = mongoose.Schema({
  userId: String,
  taskName: String,
  taskIsDone: Boolean,
}, {collection: 'TodoList'})

const todoList = mongoose.model('TodoList', todoListSchema)
export default todoList