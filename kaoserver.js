//base setup
const Koa = require('koa')
const next = require('next')
//const router = require('./router');

//data setup
const groupdata = require('./data/groupsimpleData.json');
const mongoose = require('bluebird').promisifyAll(require('mongoose'));
const mongodbKey = require("./mongodbKey.json");
const mongoString = mongodbKey.mongoString.toString();

//auth setup
const firebaseAuth = require('./libs/firebase-auth');

//middleware

const koaCookieParser = require('koa-cookie-parser');
const koaLogger = require('koa-logger');
const koaBodyparser = require('koa-bodyparser');
const Router = require('koa-router');

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router;

    server.use(koaLogger());
    server.use(firebaseAuth.init());



    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })


    server.use(router.routes())
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })



  })

