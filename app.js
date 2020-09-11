import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import koajwt from 'koa-jwt'
import start from './models/db'
import userRouter from './routes/user'
import todoListRouter from './routes/todoList'
import blogRouter from './routes/blog'


const app = new Koa()

// 设置跨域 
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});

// 添加jwt验证
app.use(koajwt({
  secret: 'f91'
}).unless({
  path: [/\/register/, /\/login/]
}))

// 验证token的中间件
app.use((ctx, next) => {
  if (ctx.header && ctx.header.authorization) {
    const parts = ctx.header.authorization.split(' ')
    if (parts.length === 2) {
      const scheme = parts[0]
      const token = parts[1]

      if (/^Bearer$/i.test(scheme)) {
        try {
          koajwt.verify(token, 'f91', {
            complete: true
          })
        } catch (e) {
          // TODO: token失败了 给如何处理
          // const newToken = getToken(token)
          // ctx.res.setHeader('Authorization', newToken)
        }
      }
    }
  }

  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = "Protected resource, use Authorization header to get access\n"
    } else {
      throw err
    }
  })
})

app.use(bodyparser())
app.use(userRouter.routes())
app.use(todoListRouter.routes())
app.use(blogRouter.routes())


app.on('error', (err, ctx) => {
  console.log('server error', err)
})

app.listen(3001, () => {
  console.log('server is on http://localhost:3001')
})

// 连接数据库
start()
export default app