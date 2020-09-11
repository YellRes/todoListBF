import Blog from '../models/blog'


const getAllBlog = async function (ctx, next) {
  const result = await Blog.find()
  info(ctx, '1000', '查询成功', {
    blogArr: result
  })
}

const addBlog = async function (ctx, next) {
  const data = ctx.request.body

  const result = await Blog.create(data)
  if (result) {
    info(ctx, '1000', '创建成功')
  } else {
    info(ctx, '1001', '创建失败')
  }

}

const deleteBlog = async function (ctx, next) {
  const data = ctx.request.body

  
}

const info = (ctx, code, message, body) => {
  ctx.response.body = {
    header: {code, message},
    body
  }
}

export default {
  addBlog,
  getAllBlog
}