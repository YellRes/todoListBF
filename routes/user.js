const router = require('koa-router')();
import Users from '../models/user'
import userControl from '../controller/user'

router.prefix('/users')

//  获取所有用户
router.get('/getAllUsers', async (ctx, next) => {
  ctx.response.body = await Users.find()
  next()
})


// 注册
router.post('/register', userControl.register)

// 登录
router.post('/login', userControl.login)

// 获取用用户信息
router.post('/getUserInfo', userControl.userInfo)

export default router

