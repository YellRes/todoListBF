import todoList from '../models/todoList'

const addTodoList = async (ctx, next) => {
  const data = ctx.request.body

  if (data.userId) {
    let arrRes = await todoList.find({userId: data.userId})
    let id = arrRes.length + 1
    let result = await todoList.create({
      ...data,
      id
    })

    console.log(result)
    log(ctx, '1000', '添加成功')

  } else {
    log(ctx, '1001', 'userId为必传字段')
  }
}

const deleteTodoListItem = async (ctx, next) => {

  const data = ctx.request.body

  if (data.userId && data.id) {
    let result = await todoList.deleteOne(
      {
        userId: data.userId,
        id: data.id
      })
      if (result.deletedCount === 0) {
        log(ctx, '1000', '该条目已删除');
      } else {
        log(ctx, '1000', '删除成功');
      }
  } else if(data.userId) {
    log(ctx, '1001', '任务id为必传字段')
  } else if (data.id) {
    log(ctx, '1001', 'userId为必传字段')
  } else {
    log(ctx, '1001', 'userId和任务id都为必传字段')
  }
}

const updateTodoListItem = async (ctx, next) => {

  const data = ctx.request.body

  if (data.userId && data.id) {
    let result = await todoList.where({id: data.id, userId: data.userId}).update({...data})
    if (result.ok) {
      log(ctx, '1000', '更新完成')
    }
  } else if(data.userId) {
    log(ctx, '1001', '任务id为必传字段')
  } else if (data.id) {
    log(ctx, '1001', 'userId为必传字段')
  } else {
    log(ctx, '1001', 'userId和任务id都为必传字段')
  }
}


const log = (ctx, code, message) => {
  ctx.response.body = {
    code, message
  }
}

export default {
  addTodoList,
  deleteTodoListItem,
  updateTodoListItem
}

