const router = require('koa-router')();
import todoList from '../models/todoList'
import todoListControl from '../controller/todoList'

router.prefix('/todoList')

router.get('/getAllTodoList', async (ctx, next) => {
  ctx.response.body = await todoList.find()
  next()
})

router.post('/addTodoList', todoListControl.addTodoList)
router.post('/deleteTodoList', todoListControl.deleteTodoListItem)
router.post('/updateTodoListItem', todoListControl.updateTodoListItem)


export default router

