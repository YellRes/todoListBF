import user from '../models/user'
import todoList from '../models/todoList'
import jwt from 'jsonwebtoken'


// 登录
const login = async function (ctx, next) {
    const data = ctx.request.body

    const result = await user.findOne({ userName: data.userName })

    if (result) {

      const {password} = data
      if (password === result.password) {
        // info(ctx, '1001', '登录成功')
        const taskArr = await todoList.find({userId: result._id})
        let payload = {
          userId: result._id,
          time:new Date().getTime(),
          timeout:1000*60*60*2
        }
        let token = jwt.sign(payload, 'f91', { expiresIn: '2h' })
        ctx.response.body = {
          header: {
            code: '1000',
            message: '登录成功',
          },
          body: {
            taskArr,
            token,
            userId: result._id,
          }
        }
      } else {
        info(ctx, '1001', '密码错误')
      }
    } else {
      info(ctx, '1001', '账户不存在')
    }

    next()

}

// 注册
const register = async function (ctx, next) {
  const data = ctx.request.body

  const result = await user.findOne({ userName: data.userName})
  if (!result) {
    // 创建记录 插入表格
    const result = await user.create(data)
    if (result) {
      info(ctx, '1000', '注册成功')

    } else {
      info(ctx, '1001', '注册失败')
    }
    
  } else {
    // 已有记录
    info(ctx, '1001', '已注册过')

  }
  next()
}

const info = (ctx, code, message, body) => {
  ctx.response.body = {
    header:{code, message},
    body
  }
}

export default {
  login,
  register
}