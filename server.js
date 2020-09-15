/*
 * @@Description: web服务
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-15 17:09:34
 * @LastEditTime: 2020-09-15 17:14:54
 * @LastEditors: i.mengxh@gmail.com
 */
const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
// const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();
    router.get(['/', '/index'], async (ctx) => {
        let indexPath = "/index";

        ctx.req.note = "Hello world";
        await app.render(ctx.req, ctx.res, indexPath, ctx.query);
    });


    router.get('*', async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200;
        await next();
    });

    server.use(router.routes());

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});