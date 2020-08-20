import user from '../models/user'

const login = async function (ctx, next) {
    const data = ctx.request.body

    const result = await user.findOne({ userName: data.userName })

    if (result) {
      const {password} = data
      if (password === result.password) {
        info(ctx, '1001', '登录成功')
      } else {
        info(ctx, '1001', '密码错误')
      }
    } else {
      info(ctx, '1001', '账户不存在')
    }

}

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

const info = (ctx, code, info1) => {
  ctx.response.body = {
    code, info1
  }
}

export default {
  login,
  register
}