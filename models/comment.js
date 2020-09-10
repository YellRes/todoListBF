import mongoose from 'mongoose'

const commentSchema = mongoose.schema({
  createTime: Date,
  likeNum: Number,
  createdBy: String,
  blogId: String,
  commentContent: String,
  parentCommentId: String
}, {collection: 'Comment'})

const comment = mongoose.model('Comment', commentSchema)