const Router = require('koa-router');
//const fireauth = require('../libs/firebase-auth');
const router = new Router;

router.get('/', (ctx) => {

    ctx.body = 'welcome';
})

router.get('/abc', (ctx) => {

    ctx.body = 'welcome abc';
})

// router.get('/protected', fireauth.auth(), (ctx) => {
//     ctx.body = {
//         //user: ctx.user;
//     }
// })

router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
})



module.exports = router;