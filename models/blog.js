import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
  blogTitle: String,
  blogContent: String,
  releaseDate: Date,
  creater: String,
  likeNum: Number,
  viewNum: Number,
  replyNum: Number,
  userId: String,
  tagType: String,
  blogImgUrl: String,
}, {collection: 'Blog'})

const Blog = mongoose.model('Blog', blogSchema)
export default Blog