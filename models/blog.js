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
  
  createrAvater: string,

  blogImgUrl: String,
  blogTitle: string,
}, {collection: 'Blog'})

const Blog = mongoose.model('Blog', blogSchema)
export default Blog