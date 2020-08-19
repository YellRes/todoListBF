import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import start from './models/db'

const app = new Koa()
app.use(bodyparser())

app.on('error', (err, ctx) => {
  console.log('server error', err)
})

app.listen(3001, () => {
  console.log('server is on http://localhost:3001')
})

// 连接数据库
start()
export default app