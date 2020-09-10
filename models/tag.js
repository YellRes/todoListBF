import mongoose from 'mongoose'

const tagSchema = mongoose.schema({
  tagId: String,
  tagName: String,
  tagAlias: String,
  tagDescribe: String
}, {collection: 'Tag'})

const tag = mongoose.model('Tag', tagSchema)
export default tag