const router = require('koa-router')();
import Users from '../models/user'
import userControl from '../controller/user'

router.prefix('/users')

router.get('/getAllUsers', async (ctx, next) => {
  ctx.response.body = await Users.find()
  next()
})

router.post('/register', userControl.register)
router.post('/login', userControl.login)

export default router

