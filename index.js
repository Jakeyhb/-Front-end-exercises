const koa = require('koa')
const app = new koa()
const Router = require('koa-router')
const router = new Router()
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const json = require('koa-json')
router.prefix('/api')
// router.get('/user', async (ctx) => {

//   const params = ctx.request.query

//   console.log(params)

//   console.log(params.name, params.email)

//   // console.log(ctx)

//   // console.log(ctx.request)

//   ctx.body = {

//     name: params.name,

//     email: params.email

//   }

// })

router.post('/user1', async (ctx) => {

  let { body } = ctx.request

  let role = ctx.request.header.role

  console.log(role)

  console.log(body)

  if (!role || role != 'admin') {

    ctx.body = {

      code: 401,

      message: 'unauthorized post'

    }

  } else {

    if (body.name && body.email) {

      ctx.body = {

        code: 200,

        data: body,

        message: '上传成功'

      }

    } else {

      ctx.body = {

        code: 404,

        message: 'name与email不得为空'

      }

    }
  }
})
app.use(koaBody())
app.use(cors())
app.use(router.routes())
  .use(router.allowedMethods())
app.listen(3003)