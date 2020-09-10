const router = require('koa-router')();
import todoList from '../models/todoList'
import todoListControl from '../controller/todoList'

router.prefix('/todoList')

// 获取所有的任务
router.get('/getAllTodoList', async (ctx, next) => {
  ctx.response.body = await todoList.find()
  next()
})

// 增加
router.post('/addTodoList', todoListControl.addTodoList)
// 删除
router.post('/deleteTodoList', todoListControl.deleteTodoListItem)
// 修改
router.post('/updateTodoListItem', todoListControl.updateTodoListItem)


export default router

