import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import start from './models/db'
import userRouter from './routes/user'
import todoListRouter from './routes/todoList'

const app = new Koa()
app.use(bodyparser())
app.use(userRouter.routes())
app.use(todoListRouter.routes())

app.on('error', (err, ctx) => {
  console.log('server error', err)
})

app.listen(3001, () => {
  console.log('server is on http://localhost:3001')
})

// 连接数据库
start()
export default app