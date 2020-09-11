const router = require('koa-router')();
import blogControl from '../controller/blog'

router.prefix('/blogs')

router.post('/getAllBlog', blogControl.getAllBlog)

export default router
