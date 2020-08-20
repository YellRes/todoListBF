import todoList from '../models/todoList'

const addTodoList = async (ctx, next) => {
  const data = ctx.request.body

  if (data.userId) {
    let result = await todoList.create(data)
    log(ctx, '1000', '添加成功')

  } else {
    log(ctx, '1001', 'userId为必传字段')
  }
}


const log = (ctx, code, message) => {
  ctx.response.body = {
    code, message
  }
}

export default {
  addTodoList
}

