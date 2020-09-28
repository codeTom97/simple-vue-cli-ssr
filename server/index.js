/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const Koa = require("koa");
const Router = require("koa-router");
const KoaStatic = require("koa-static");
const { createBundleRenderer } = require("vue-server-renderer");

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;
const resolve = (file) => path.resolve(__dirname, file);

const bundle = require("../dist/vue-ssr-server-bundle.json");
const clientManifest = require("../dist/vue-ssr-client-manifest.json");
const HtmlTemplate = fs.readFileSync(path.resolve(__dirname, "..", "public/index.temp.html"), "utf-8");

const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template: HtmlTemplate,
    clientManifest
});

const renderToString = (context, renderer) => {
    return new Promise((reslove, reject) => {
        renderer.renderToString(context, (err, html) => {
            err ? reject(err) : reslove(html);
        });
    });
};

router.get("/", async (ctx) => {
    const context = {
        title: "Hello SSR",
        url: ctx.url
    };
    try {
        ctx.body = await renderToString(context, renderer);
    } catch (err) {
        console.log(err);
        ctx.status = 500;
        ctx.body = "服务端异常";
    }
});

// 开放静态资源 => 路由是/

app.use(router.routes()).use(router.allowedMethods());

app.use(KoaStatic(resolve("../dist")));

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
