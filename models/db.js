import mongoose from 'mongoose'

// 打开连接数据库
function start () {
  mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true})
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('mongodb 连接成功！！')
  })
}

export default start